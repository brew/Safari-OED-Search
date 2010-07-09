document.addEventListener("contextmenu", onContextMenu, false);

function onContextMenu(e) {
    var sel = '';
    sel += window.parent.getSelection();
    sel = sel.replace(/^\s+|\s+$/g,"");       
    safari.self.tab.setContextMenuEventUserInfo(e, sel);
}