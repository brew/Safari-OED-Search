document.addEventListener("contextmenu", onContextMenu, false);

function onContextMenu(e) {
  var sel = '';
  sel += window.parent.getSelection();
  sel = sel.replace(/^\s+|\s+$/g,"");       
  safari.self.tab.setContextMenuEventUserInfo(e, sel);
}

function messageHandler(e) {
  if(e.name == "prefillOEDLogin") {
    document.getElementById("libLoginCard").value = e.message.libCardNum;
    document.getElementsByName("dest")[1].value = e.message.dest;
    document.getElementById("libLoginForm").submit();
  }
}

safari.self.addEventListener("message", messageHandler, false);
safari.self.tab.dispatchMessage("tabLoadedMessage","I've loaded!");
