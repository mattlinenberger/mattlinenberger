console.log('Building Modals...');

const arrayModals = [];

/* array push */
arrayModals.push({
  idMain: 'modalBobsBurgers',
  idImage1: 'imageBobsBurgers1',
});

/* loop through the array, build the modal for each item in the array */
arrayModals
  .forEach(function (currentItem) {
    console.log('Building modal: %O', currentItem);

    /* get elements using IDs for the modal */
    const elementModal =
      document.getElementById(currentItem.idMain);

    /* element that has the image we want to show */
    const elementImage1 =
      document.getElementById(currentItem.idImage1);

    /* element in the modal, we are going to set the image on */
    const elementImagePlaceholder =
     elementModal
      .getElementsByTagName('img')[0];

    /* get the first span inside of the modal */
    const elementClose =
      elementModal
        .getElementsByTagName('span')[0];

    const elementCaption =
      elementModal
        .getElementsByTagName('div')[0];

    /* wire the close click handler */
    elementClose
      .onclick = function() {
        elementModal.style.display = 'none';
      }

    /* setup the click handler */
    elementImage1
      .onclick = function () {
        /* display the modal */
        elementModal.style.display = 'block';
        /* set the image modal with the content of the image clicked */
        elementImagePlaceholder.src = this.src;
        /* add the caption text */
        elementCaption.innerHTML = this.alt;
      }
  });