'use babel';

export default class StackOverflowHelpView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('stack-overflow-answers');
    this.element.style = "overflow: scroll; overflow-x: hidden; height: 800px;";

    // Create message element
    const message = document.createElement('div');

    message.innerHTML = '<img id="screenshot" src="" style="zoom: 80%; margin-top: -325px;"/>'
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  setURL(url, theirThis) {
    document.getElementById("screenshot").src = url;
    var arr = document.getElementsByClassName('modal overlay from-top');
    arr[arr.length - 1].onclick = () => {
      theirThis.modalPanel.hide()
    };
    return theirThis.modalPanel.show()
  }

}
