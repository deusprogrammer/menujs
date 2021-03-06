function Frame(frameName, x, y, width, height) {
   this.frameName = frameName;
   this.x        = x;
   this.y        = y;
   this.width    = width;
   this.height   = height;
   this.padding  = 0;
   this.margin   = 0;
   this.children = [];
   this.addChild = function(child) {
      this.children.push(child);
   };
}

function Menu(menuName, callback) {
   this.menuName  = menuName;
   this.padding   = 0;
   this.margin    = 0;
   this.cursor    = 0;
   this.nChildren = 0;
   this.children  = [];
   this.callback  = callback;
   this.addChild  = function(child) {
      this.children.push(child);
      this.nChildren++;
   };
   
   this.getSelected = function() {
      return children[this.cursor];
   };
   
   this.activateSelected = function() {
      this.children[this.cursor].callback();
   };
   
   this.cursorUp = function() {
      if (this.cursor > 0)
         this.cursor--;
      return this;
   };
   
   this.cursorDown = function() {
      if (this.cursor < this.nChildren)
         this.cursor++;
      return this;
   };
   
   this.getCursorPosition = function() {
   };
}

function MenuItem(itemName, callback) {
   this.itemName = itemName;
   this.callback = callback;
}

//Test code

var frame     = new Frame("master", 0, 0, 640, 480);
var subFrame  = new Frame("rightFrame", 640 - 100, 0, 100);
var rightMenu = new Menu("rightMenu");

//Menu Item callbacks
rightMenu.addChild(new MenuItem("Items", function() {
   console.log("ITEMS ACTIVATED!");
}));

rightMenu.addChild(new MenuItem("Equip", function() {
   console.log("EQUIP ACTIVATED!");
}));

rightMenu.addChild(new MenuItem("Relics", function() {
   console.log("RELICS ACTIVATED!");
}));

subFrame.addChild(rightMenu);
frame.addChild(subFrame);

console.log("FRAME OBJECT: " + JSON.stringify(frame));

rightMenu.cursorDown().activateSelected();
rightMenu.cursorDown().activateSelected();
rightMenu.cursorUp().cursorUp().activateSelected();
