'use babel';

import StackOverflowHelpView from './stack-overflow-help-view';
import { CompositeDisposable } from 'atom';
import google from 'google';
import request from 'request';
import cheerio from 'cheerio';
import Urlbox from 'urlbox';
const urlbox = Urlbox('wWkE8qmOYIuPM8RD', '53c834862b924f95a9a061c6430b103d');

function getResult(question) {
  return new Promise(function(resolve, reject) {
    var searchQuery = `${question} site:stackoverflow.com`

    google.resultsPerPage = 1

    google(searchQuery, function(err, res) {
      if (err || res.links.length === 0) { reject({reason: 'Google search failed.'}) }
      else {
        resolve(res.links[0].href)
      }
    })
  })
}

function download(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject({ reason: 'Could not download the page.' });
      }
    });
  });
}

function getTitle(body) {
  $ = cheerio.load(body)
  return $('h1 a.question-hyperlink').text()
}

export default {

  stackOverflowHelpView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.stackOverflowHelpView = new StackOverflowHelpView(state.stackOverflowHelpViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.stackOverflowHelpView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'stack-overflow-help:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.stackOverflowHelpView.destroy();
  },

  serialize() {
    return {
      stackOverflowHelpViewState: this.stackOverflowHelpView.serialize()
    };
  },

  toggle() {
    if (editor = atom.workspace.getActiveTextEditor()) {
      var row = editor.getCursorScreenPosition().row;
      var question = editor.lineTextForScreenRow(row);
      var selection = editor.selectLinesContainingCursors(row);
      editor.delete(selection);

      getResult(question).then(url => {
        return download(url).then(body => {
          atom.notifications.addSuccess('The title of your Stack Overflow page is: ' + getTitle(body) + '!');
          const options = {
            url: url,
            format: 'png',
            full_page: true,
            height: 1440,
            width: 900,
          }
          const imgURL = urlbox.buildUrl(options);
          atom.notifications.addSuccess('Rendering your page now.');
          this.stackOverflowHelpView.setURL(imgURL, this);
        })
      }).catch(function(err) {
        atom.notifications.addWarning(err)
      });
    }
    return
  }

};
