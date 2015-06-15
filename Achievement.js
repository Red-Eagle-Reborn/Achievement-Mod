/*
                    Red Eagle General License
                       Version 3, 05/06/2015
                       
  You Are Not Allowed To Copying or Using Our Code Without Our Permission.
  You Are Allowed To Copying or Using Our Code If You Are Have A Permisson From Leader Or Mods Creator.
  Don't Claim Our Mods To Be Yours.
  Don't Moditified Out Mods To Your Version.
  
  Mod Creator : respectZ && DevilLord Red Eagle
  Mod Release Date : 15 June 2015
  
  By Team Red Eagle.
*/
var woodBase = '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';
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";
Base64Decode(android.util.Base64.decode(woodBase, 0), path + "/GettingWood.png");
var imgWood = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/GettingWood.png");
var WoodGUI = new android.graphics.drawable.BitmapDrawable(imgWood);
var wood = false;
var benchmarking = false;
var GUI;
var tick=0;
function modTick() {
    checkAchievement();
    if(tick>0) {
        tick--;
    } else if(tick<=0) {
        removeGUI();
}
}

function checkAchievement() {
    if(!wood) {
        var woodCheck = checkInv(17);
        if(woodCheck===true) {
            wood=true;
            unlockAchievement("wood");
        }
    }
/*
    if(wood&&!benchmarking) {
        var benchCheck = checkInv(58);
        if(benchCheck) {
            benchmarking=true;
            unlockAchievement("bench")
        }
    }
*/
}


function checkInv(id) {
    for(var i=0;i<250;i++) {
        if(Player.getInventorySlot(i)==id) {
            return true;
        }
    }
}

function unlockAchievement(type) {
    var imageToDraw;
    if(type=="wood") {
        imageToDraw = WoodGUI;
    }
    drawGui(imageToDraw);
}

function drawGui(image) {
ctx.runOnUiThread(new java.lang.Runnable(){
    run: function() {
            removeGUI();
			GUI = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			GUI.setContentView(layout);
			GUI.setBackgroundDrawable(image);
			GUI.setWidth(555);
			GUI.setHeight(109);
			GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER, 0, 0);
        }
        })
        tick=100;
}

function Base64Decode(byteArray, Path) {
    var File = new java.io.File(Path);
    if (!File.exists()) {
        File.createNewFile();
        var Stream = new java.io.FileOutputStream(File);
        Stream.write(byteArray);
        Stream.close();
    }
}

function leaveGame() {
  removeGUI();
}

function removeGUI() {
ctx.runOnUiThread(new java.lang.Runnable(){
    run: function() {
                if(GUI!==null) {
                    GUI.dismiss();
                    GUI=null;
                }
        }
        })
}
