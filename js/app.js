console.log('Building Modal...');

const arrayModals = [];

/* array push */
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers4',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers5',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageBobsBurgers6',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic4',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic5',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageComic6',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageWhereToEat1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageWhereToEat2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageWhereToEat3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageSlotMachine1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageSlotMachine2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageSlotMachine3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imageSlotMachine4',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm4',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm5',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm6',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm7',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm8',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm9',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm10',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm11',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm12',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm13',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagecrm14',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagebf1',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagebf2',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagebf3',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagebf4',
});
arrayModals.push({
  idMain: 'modal',
  idImage1: 'imagebf5',
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