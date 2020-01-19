export var handleContextMenu = (event, root) => {
   event.preventDefault();

   const clickX = event.clientX;
   const clickY = event.clientY;
   const screenW = window.innerWidth;
   const screenH = window.innerHeight;
   const rootW = root.offsetWidth;
   const rootH = root.offsetHeight;

   const right = (screenW - clickX) > rootW;
   const left = !right;
   const top = (screenH - clickY) > rootH;
   const bottom = !top;

   if (right) {
      root.style.left = `${clickX + 5}px`;
   }

   if (left) {
      root.style.left = `${clickX - rootW - 5}px`;
   }

   if (top) {
      root.style.top = `${clickY + 5}px`;
   }

   if (bottom) {
      root.style.top = `${clickY - rootH - 5}px`;
   }
}

export var renderTrumbowyg = (id) => {
   $(id).trumbowyg({
      svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
      removeformatPasted: true,
      autogrow: true,
      imageWidthModalEdit: true
   })
}

export var appendValueTrumbowyg = (id, content) => {
   $(id).trumbowyg('html', content)
}