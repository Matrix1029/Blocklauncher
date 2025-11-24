var no=0;
var cno=1;
var sh=false;
var already_opened=false;
//Глобальные переменные
var sptextt="";
var spam=false;
var comm="";
var pl="";
var gr="[BallyCH Cheat]";
var ipl=false;
var mtimer=20;
var timer=0;
var gs=20;
var selpl=null;
var akt=0;
var copytext="§4BallyCH§c v4.8.4";
cp();
var cheatlink="https://vk.com/wall-124469114_5252";
//Переменные галочек
var PASS_HACK_SWITCH_1 = false;
var PASS_HACK_SWITCH_2 = false;
var PASS_HACK_SWITCH_3 = true;
var PFS=0.8;
var ch1 = false;
var ch2 = false;
var ch3 = true;
var ch4 = true;

var cc1 = false;//Fly
var cc2 = false;//VisualRoad
var cc3 = false;//Tower
var cc4 = false;//Gamemode
var cc5 = false;//Fly+
var cc6 = false;
var cc7 = false;
var cc8 = false;//Loop
var cc9 = false;//PlayerDetect
var cc10 = false;//SitHat
var cc11 = false;//TransWatch
var cc12 = false;//AntiKnockBack
var cc13 = false;//FastEat
var cc14 = false;//Hints
var cc15 = false;//DestroView
var cc16 = false;//Nuker
var cc17 = false;//Sprint&Jump
var cc18 = false;//TapTeleport
var cc19 = false;//TpToSpawnOnLowHP
var cc20 = false;//WallHack
var issue_5_20 = false;
var cc21 = false;//BowZoom
var cc22 = false;//AntiFlame
var cc23 = false;//AimBot
var cc24 = false;//Hj
var cc25 = false;//CroachSpeed
var cc26 = false;//Spider
//cc27 занято (уже не помню чем ну да пофиг)
var cc28 = false;//NoWeather
var cc29 = false;//Hide cheat icon
var cc30 = false;//JetPack
var cc31 = false;//TapVelocity
var cc32 = false;//TapSpeedUp
var cc33 = false;//MegaHit
var curcurc=10;

var Path = android.os.Environment.getExternalStorageDirectory();

var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function runAsGUI(f){
context.runOnUiThread(new java.lang.Runnable({run: function(){
try{
f();
}catch(e){
print(e);
}
}}));
}












var pth=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Music/";

var dialogTitle="Music player";  //заголовок диалога

var dplayer;
function Ml(a,b){ModPE.langEdit(a,b)}
function cp(){
Ml("menu.copyright",copytext);
}


function shwDialog(){
context.runOnUiThread(new java.lang.Runnable({
run:function(){
try{
var builder=new android.app.AlertDialog.Builder(context);
builder.setTitle(dialogTitle);
var scroll = new android.widget.ScrollView(context); 
var list=new java.io.File(pth).list(); //получаем массив с названиями файлов из папки, путь к которой мы указали ранее
builder.setItems(list, new android.content.DialogInterface.OnClickListener({
onClick:function(dialog,which){

var player=new android.media.MediaPlayer();

player.setDataSource(pth+list[which]);

try{dplayer.stop();}catch(e){}

try{
player.prepare();

player.start();
dplayer=player;
dplayer.setLooping(cc8);
}
catch(e){print("Воспроизведение невозможно.");}

//builder.create().show();

}
}));
builder.create().show();
}catch(e){clientMessage(e);}
}
}));
}
var ffrange = 15;
var ffwidth = 10;
var ffheight = 10;
	function isInRange(ent, maxDist) {
			if(getDistanceToEntity(ent) <= maxDist)
				return true;
			return false;
		}
		
		function isValid(ent) {
			if(ent == getPlayerEnt())
				return false;
			return true;
		}
	function getDistanceToEntity(entity) {
			var x = getPlayerX() - Entity.getX(entity);
			var y = getPlayerY() - Entity.getY(entity);
			var z = getPlayerZ() - Entity.getZ(entity);
			var distance = Math.sqrt(x * x + y * y + z * z);
			return distance;
		}
		


var emlll="/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+Or/jGOX9mI/8itafGy08LcffmvdVvJpPxsrPV7SyP+xM8qf8ttXm/clFFduNxv136o3hMFhqmGwWHwVSpgsP9W+u/VueFHF4ujCf1b679W9hhsRiMNRw/wBc+rwzDMIYnOsRmmaYnjweD+p/WorFYzEQxGMr4unDGV/rH1P6xyzq4XC1Zw+sfU/rHtsTQoYmtiPqnt5YHAzoZRh8ty2h/9k=";

      var imle = android.util.Base64.decode(emlll, 0); 
var directory=android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeByteArray(imle, 0, imle.length), 80, 80, false);




  var GUI;
        var menu;

        var Effectmenu;
        var setting=true;
        var exitUI;
 
        var Color= "WHITE";

        var sdcard = android.os.Environment.getExternalStorageDirectory();
 
function wr(byteArray,path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file.delete();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
	}

var Path = android.os.Environment.getExternalStorageDirectory();
  //тип шрифт
        function dip2px(dips){
            return Math.ceil(dips * context.getResources().getDisplayMetrics().density);
        }

function onbtn()
        {
        
        context.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
        var layout = new android.widget.LinearLayout(context);
        layout.setOrientation(1);     
var emll="/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDADUlKC8oITUvKy88OTU/UIVXUElJUKN1e2GFwarLyL6qurfV8P//1eL/5re6////////////zv//////////////2wBDATk8PFBGUJ1XV53/3Lrc////////////////////////////////////////////////////////////////////wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDMoop6qCKAGUVJtHpRtHpQBHRUm0elG0elAEdFSbR6UbR6UAR0U9lAFMoAKkX7oqOpF+6KAHou7POKd5Xv+lEXepK1jFNXZlKTTsiPyvf9Kbs96mpuDUzSWxUW+pHs96RhipKY/aoLGN901HUjfdNR0AFSL90VHUi/dFAEsXepKhTvUi9atTsrEOOtx1FFFQWNbrUb9qmqOXtVuFlchS1sRN901HUjfdNR1BYVIv3RUdSL90UAPTvT6jU4pd/tQBJk06od/tTvN9v1q4NLciSfQkqOXtR5vt+tNdt2OMVUpJqyJjFp3Yxvumo6kb7pqOsjUKerACmUUASbh60bh61HRQBJuHrRuHrUdFAEm4etG4etR0UAPZgRTKKKAP/Z";

      var imme = android.util.Base64.decode(emll, 0); 
      var immgBt = new android.widget.ImageView(context);
      immgBt.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(imme, 0, imme.length));
      immgBt.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
if(already_opened){try{menu.dismiss();}catch(e){}
try{Effectmenu.dismiss();}catch(e){}already_opened=false;} else{already_opened=true;
if(setting==true)
{
effectMenu();
}}
      }
      }));
      layout.addView(immgBt);



//var context=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function tick(){
context.runOnUiThread(new java.lang.Runnable({run: function(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function(){tick()}}),30);
}}));
if(no<=100){
immgBt.setAlpha(no*0.01);
no=no+cno;
}else{immgBt.setAlpha(1);}
if(cc29)immgBt.setAlpha(0);
else immgBt.setAlpha(1);
}

tick();









        GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
        GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        GUI.showAtLocation(context.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM,0,250);
        }catch(err){
        print('An error occured: ' + err);
        }
        }}));
        }
onbtn();
         function mainMenu(){
if(setting==false)
{
    context.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
        var menuLayout = new android.widget.LinearLayout(context);
        var menuScroll = new android.widget.ScrollView(context);
        var menuLayout1 = new android.widget.LinearLayout(context);
        menuLayout.setOrientation(1);
        menuLayout1.setOrientation(1);
        menuScroll.addView(menuLayout);
        menuLayout1.addView(menuScroll);
     var image = new android.widget.ImageView(context);
     image.setImageBitmap(directory);
     image.setOnClickListener(new android.view.View.OnClickListener(){
     onClick: function(viewarg){
     print("Ouch, don\'t touch me!=)");
     }
     });
     menuLayout.addView(image);          var textview2 = new android.widget.TextView(context);
        textview2.setTextSize(20);
        textview2.setText('Choose color, then tap \"Next\" button');
        textview2.setGravity(android.view.Gravity.CENTER);
        textview2.setTextColor(android.graphics.Color[Color]);
               menuLayout.addView(textview2);
        
        
        var button = new android.widget.Button(context);
        button.setTextColor(android.graphics.Color.BLUE);
        button.setText('BLUE');
        
        button.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        
        textview2.setTextColor(android.graphics.Color.BLUE);
Color="BLUE"
        }
        }));
        menuLayout.addView(button);
        
        var button1 = new android.widget.Button(context);
        button1.setTextColor(android.graphics.Color.WHITE);
        button1.setText('WHITE');
    button1.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){

             textview2.setTextColor(android.graphics.Color.WHITE);
           
Color="WHITE"
        }
        }));
        menuLayout.addView(button1);    
        
        var button3 = new android.widget.Button(context);
     button3.setTextColor(android.graphics.Color.RED);   
        button3.setText('RED');
        
        button3.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        
        textview2.setTextColor(android.graphics.Color.RED);
             
Color="RED"
        }
        }));
        menuLayout.addView(button3);
        
        var button4 = new android.widget.Button(context);
     button4.setTextColor(android.graphics.Color.YELLOW);   
        button4.setText('YELLOW');

        button4.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.YELLOW);
                 
Color="YELLOW"
        }
        }));
        menuLayout.addView(button4);   
 



        var button6 = new android.widget.Button(context);
     button6.setTextColor(android.graphics.Color.BLACK);   
        button6.setText('BLACK');
        
        button6.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.BLACK);
        
Color="BLACK"
        }
        }));
        menuLayout.addView(button6);


 




        var button7 = new android.widget.Button(context);
     button7.setTextColor(android.graphics.Color.GREEN);   
        button7.setText('GREEN');
       
        button7.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.GREEN);
        
Color="GREEN"
        }
        }));
        menuLayout.addView(button7);




        var butt7 = new android.widget.Button(context);
     butt7.setTextColor(android.graphics.Color.CYAN);   
        butt7.setText('CYAN');
        
        butt7.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.CYAN);
              
Color="CYAN"
        }
        }));
        menuLayout.addView(butt7);





        var butt8 = new android.widget.Button(context);
     butt8.setTextColor(android.graphics.Color.MAGENTA);   
        butt8.setText('MAGENTA');
        
        butt8.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.MAGENTA);
        
Color="MAGENTA"
        }
        }));
        menuLayout.addView(butt8);





        var butt9 = new android.widget.Button(context);
     butt9.setTextColor(android.graphics.Color.DKGRAY);   
        butt9.setText('DKGRAY');

        butt9.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
        
        textview2.setTextColor(android.graphics.Color.DKGRAY);
               
Color="DKGRAY"
        }
        }));
        menuLayout.addView(butt9);



   var button5 = new android.widget.Button(context);
        button5.setText('NEXT');
        button5.setTextColor(android.graphics.Color[Color]);
        
        button5.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function(viewarg){
	  setting = true;
	  already_opened=false;
        menu.dismiss();
 }
     }));
        menuLayout.addView(button5);
        
       
  menu = new android.widget.PopupWindow(menuLayout1, context.getWindowManager().getDefaultDisplay().getWidth()/1, context.getWindowManager().getDefaultDisplay().getHeight());
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
        menu.showAtLocation(context.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
        print('An error occured: ' + error);
        }
        }}));
        }
}
 
        //вторая менюшка идет
        
        function effectMenu(){
 context.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
  var menuLayout = new android.widget.LinearLayout(context);
  var menuScroll = new android.widget.ScrollView(context);
  var menuLayout1 = new android.widget.LinearLayout(context);
  menuLayout.setOrientation(1);
  menuLayout1.setOrientation(1);
  menuScroll.addView(menuLayout);
  menuLayout1.addView(menuScroll);
  var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
        
 
        
        var textview4 = new android.widget.TextView(context);
        textview4.setTextSize(35);
        textview4.setText('BALLYCH');
        textview4.setGravity(android.view.Gravity.CENTER);
        textview4.setTextColor(android.graphics.Color[Color]);
         menuLayout.addView(textview4);
                var hss4 = new android.widget.TextView(context);
        hss4.setTextSize(14);
        hss4.setText('MCPE CHEAT');
        hss4.setGravity(android.view.Gravity.RIGHT);
        hss4.setTextColor(android.graphics.Color[Color]);
        
        menuLayout.addView(hss4);
        

  var image = new android.widget.Button(context);
      image.setText('Close menu');
      image.setTextColor(android.graphics.Color.RED);
     image.setOnClickListener(new android.view.View.OnClickListener(){
     onClick: function(viewarg){
  Effectmenu.dismiss();already_opened=false;
     }
     });
     menuLayout.addView(image); 
 var eml="iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACPklEQVR4Ae3XwUobQRzH8e/FWJPGU7YRH6G+QQ1R2qpHoTl47Qso6EXJQ7RQC+1JE1qhvSl6KChEDQ2hhN56Dd5DCB4KzUY6fYLZzM5/ZruH/fxe4Ae/ZGeG1MpkMgU2qNOkyx1DQkKG3NGlSZ118iSozB5tQlRExtyyyxO8W+WCB5RhJpxTxZvnfEdZpM0Kzi3yFSXICQs4tMU9SpgRNZyY5SPKUQ7JITRPC+UwlzxGIOAnynF6BFial9fRVCpiYZYWylOuyBHbB5THvCOmLZTnvCKGRe69FxpRxtgXVAL5ZH5mqYRSxYj5EfpLWOgGA6so4+RpCCtVmOoCZRyA1/wWFDpjijIPMQvBU8F0EwIi7aFiF0I03Q6R2laFJNNdE6FAaFdIMN0f5tDaQAkK2U63hlZdUMh+ugO0moJC9tMdo9UVFLKfroPWnaCQ/XR9tIaCQvbTDdAK7QoJpxuntJD/yZbkk6XuR526v738w6ifSp+jtB0d+2it/5fD9SVaedH1Y8n99QNuE7+gtYi0m/gVdptIZSZxCplPpUlIiSnOE30GnTJVNdGH4jMMtBN7SrcwsoJKJH9ZxtBJIoUaGFtg5L3OkIAYat4LbRLTe6913hJbjktvdb4xg4UiPS91flDAUkDPQ50SAkWuHI9VQCjHobM6b5jBiRry79KQTRwq81l0SDQIcK7KjeURWsGbCmcxrnAhpyzjXcAO14ynXN1bbFMiQXOsccAxHfoMGDNmQJ8OR+zzgkekVCaT+Qc/EgqRUxr5AQAAAABJRU5ErkJggg==";
 
 
 
      var ime = android.util.Base64.decode(eml, 0); 
      var imgBt = new android.widget.ImageView(context);
      imgBt.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(ime, 0, ime.length));
      imgBt.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){


shwDialog();


      }
      }));
      menuLayout.addView(imgBt);



//Music controls


 var cch8 = new android.widget.Switch(context);
      cch8.setText('Repeat (beta)');
      cch8.setTextColor(android.graphics.Color[Color]); 
      cch8.setChecked(cc8);
      cch8.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc8){
      cc8= true;

      
      try{
      dplayer.setLooping(true);
           print("Repeat activated."); }
      catch(err){print("Operation denied.");}
      
      //Your Code Here...
      }else{
      cc8 = false;
      //Your Code Here...

      
            try{
      dplayer.setLooping(false);
            print("Repeat deactivated.");}
      catch(err){print("Operation denied.");}
      
      
      }
      cch8.setChecked(cc8);
      }
      }));
      menuLayout.addView(cch8);



var btton = new android.widget.Button(context);
      btton.setText('Stop');
      btton.setTextColor(android.graphics.Color[Color]);
      btton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
        try{
     
      dplayer.stop();
           print("Stopped successful."); }
      catch(err){print("Operation denied.");}
      }
      }));
      menuLayout.addView(btton);


   var sharebutton = new android.widget.Button(context);
      sharebutton.setText('Share');
      sharebutton.setTextColor(android.graphics.Color[Color]); 
      sharebutton.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      var activ = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var inte = new android.content.Intent("android.intent.action.SEND");
inte.setType("text/plain");
inte.putExtra("android.intent.extra.TEXT", "Do you want to win any MCPE minigame without difficulties? Do you want to have powerful cheat with a big variety of functions? Download the newest version of \"BallyCH\" cheat here: "+cheatlink);
activ.startActivity(inte);
      }
      }));
      menuLayout.addView(sharebutton);


      var buttonq = new android.widget.CheckBox(context);
      buttonq.setText('/l');
      buttonq.setTextColor(android.graphics.Color[Color]);
      buttonq.setChecked(PASS_HACK_SWITCH_2);
      buttonq.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!PASS_HACK_SWITCH_2){
      PASS_HACK_SWITCH_2 = true;
      //Код при активации
      prefix="/l ";
      PASS_HACK_SWITCH_1=false;
      PASS_HACK_SWITCH_3=false;
      b.setChecked(PASS_HACK_SWITCH_1);
      bg.setChecked(PASS_HACK_SWITCH_3);
      }else{
     
      //Код при деактивации
      }
      buttonq.setChecked(PASS_HACK_SWITCH_2);
      }
      }));
      menuLayout.addView(buttonq);
      

      var b = new android.widget.CheckBox(context);
      b.setText('No authorization command.');
      b.setChecked(PASS_HACK_SWITCH_1);
      b.setTextColor(android.graphics.Color[Color]);
      b.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!PASS_HACK_SWITCH_1){
      PASS_HACK_SWITCH_1 = true;
      //Код при активации
      PASS_HACK_SWITCH_2=false;
      PASS_HACK_SWITCH_3=false;
      prefix='';
      buttonq.setChecked(PASS_HACK_SWITCH_2);
      bg.setChecked(PASS_HACK_SWITCH_3);
      }else{
     
      //Код при деактивации
      }
      b.setChecked(PASS_HACK_SWITCH_1);
      }
      }));
      menuLayout.addView(b);
      

      var bg = new android.widget.CheckBox(context);
      bg.setText('/login');
      bg.setChecked(PASS_HACK_SWITCH_3);
      bg.setTextColor(android.graphics.Color[Color]);
      bg.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!PASS_HACK_SWITCH_3){
      PASS_HACK_SWITCH_3 = true;
      //Код при активации
      PASS_HACK_SWITCH_1=false;
      PASS_HACK_SWITCH_2=false;
      prefix="/login ";
      buttonq.setChecked(PASS_HACK_SWITCH_2);
      b.setChecked(PASS_HACK_SWITCH_1);
      }else{
      
      //Код при деактивации
      }
      bg.setChecked(PASS_HACK_SWITCH_3);
      }
      }));
      menuLayout.addView(bg);
      var hak = new android.widget.Button(context);
      hak.setText('Hack');
      hak.setTextColor(android.graphics.Color[Color]);
      hak.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
      send()
      }
      }));
      menuLayout.addView(hak);
      var reset = new android.widget.Button(context);
      reset.setText('Reset hacking');
      reset.setTextColor(android.graphics.Color[Color]);
      reset.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
      num=0;
      print("Reset successful.")
      }
      }));
      menuLayout.addView(reset);


      var dan = new android.widget.Button(context);
      dan.setText('Spam info');
      dan.setTextColor(android.graphics.Color[Color]);
      dan.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      //Your Code Here...
      
      
      
      
      var alert = new android.app.AlertDialog.Builder(context); 
alert.setTitle("Write info"); 
var scroll = new android.widget.ScrollView(context); 
var layout = new android.widget.LinearLayout(context); 
layout.setOrientation(1); 
var note = new android.widget.TextView(context); 
note.setText("Fill spam settings"); 
note.setTextColor(android.graphics.Color.GREEN); 
note.setTextSize(15); 
var ip = new android.widget.EditText(context); 
ip.setHint("Spam text");
ip.setText(sptextt);
var port = new android.widget.EditText(context); 
port.setHint("Player that will receive your spam (if /tell or /msg chosen)"); 
port.setText(pl);
var params = new android.view.ViewGroup.LayoutParams(-2,-2); 
layout.addView(note,params); 
layout.addView(ip,params); 
layout.addView(port,params); 
alert.setView(layout); 
alert.setPositiveButton("Save", new android.content.DialogInterface.OnClickListener(){ 
onClick: function(viewarg){ 
sptextt=ip.getText()
pl=port.getText()
print("Info saved.")
}}); 
alert.setNeutralButton("Close",new android.content.DialogInterface.OnClickListener(){ 
onClick: function(viewarg){ 
//код при нажатии отмена 
}}); 
var dialog = alert.create(); 
dialog.show(); 
     
      }
      }));
      menuLayout.addView(dan);




      var c1 = new android.widget.CheckBox(context);
      c1.setText('/tell');
      c1.setTextColor(android.graphics.Color[Color]);
      c1.setChecked(ch1);
      c1.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!ch1){
      ch1 = true;
      //Код при активации
      ch2=false
      ch3=false
      comm="/tell "
      c2.setChecked(ch2);
      c3.setChecked(ch3);
      ipl=true;
      }else{
    
      //Код при деактивации
      }
      c1.setChecked(ch1);
      }
      }));
      menuLayout.addView(c1);


      var c2 = new android.widget.CheckBox(context);
      c2.setText('/msg');
      c2.setTextColor(android.graphics.Color[Color]);
      c2.setChecked(ch2);
      c2.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!ch2){
      ch2 = true;
      //Код при активации
      ch1=false
      ch3=false
      comm="/msg "
      c1.setChecked(ch1);
      c3.setChecked(ch3);
      ipl=true;
      }else{
    
      //Код при деактивации
      }
      c2.setChecked(ch2);
      }
      }));
      menuLayout.addView(c2);


      var c3 = new android.widget.CheckBox(context);
      c3.setText('Common chat');
      c3.setTextColor(android.graphics.Color[Color]);
      c3.setChecked(ch3);
      c3.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!ch3){
      ch3 = true;
      //Код при активации
      ch1=false
      ch2=false
      comm=""
      c1.setChecked(ch1);
      c2.setChecked(ch2);
      ipl=false;
      }else{
      //Код при деактивации
      }
      c3.setChecked(ch3);
      }
      }));
      menuLayout.addView(c3);


      var c4 = new android.widget.CheckBox(context);
      c4.setText('Place [BallyCH] before message (recommended)');
      c4.setTextColor(android.graphics.Color[Color]);
      c4.setChecked(ch4);
      c4.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(!ch4){
      ch4 = true;
      //Код при активации
      gr="[BallyCH]"
      }else{
      ch4 = false;
      gr=""
      //Код при деактивации
      }
      c4.setChecked(ch4);
      }
      }));
      menuLayout.addView(c4);





var note1 = new android.widget.TextView(context); 
note1.setText("Choose spam speed.\nCurrent speed: "+Math.floor(20/mtimer)+" msg per second."); 
note1.setTextColor(android.graphics.Color[Color]); 
note1.setTextSize(15); 
menuLayout.addView(note1);


var sbProgress = 0;
      var sb = new android.widget.SeekBar(context);
      sb.setMax(19);
      sb.setProgress(20-mtimer);
      sb.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      sbProgress=sb.getProgress();
      mtimer=20-sbProgress;
      note1.setText("Choose spam speed.\nCurrent speed: "+Math.floor(20/mtimer)+" msg per second.");
      }
      });
      
      
      menuLayout.addView(sb);




      var spbu = new android.widget.Button(context);
      spbu.setText('Spam');
      spbu.setTextColor(android.graphics.Color[Color]);
      spbu.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      if(spam==false)
      {
      spam=true
     // sptextt=sptext.getText()
     // pl=pll.getText()
      print("Spam is active now.")
      }
      else
      {
      spam=false
      print("Spam deactivated.")
      } 
      }
      }));
      menuLayout.addView(spbu);


               
                                      
                          
                        
      
var note2 = new android.widget.TextView(context); 
note2.setText("Choose game speed.\nCurrent game speed: "+gs*5+"%."); 
note2.setTextColor(android.graphics.Color[Color]); 
note2.setTextSize(15); 
menuLayout.addView(note2);                  
                         
   
   
   
   
                         
var sbPro = 0;
      var sb2 = new android.widget.SeekBar(context);
      sb2.setMax(99);
      sb2.setProgress(gs-1);
      sb2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      sbPro=sb2.getProgress();
      gs=sbPro+1;
      ModPE.setGameSpeed(gs)
      note2.setText("Choose game speed.\nCurrent game speed: "+gs*5+"%.");
      }
      });
      
      
      menuLayout.addView(sb2);                         
 
 
 
 
 
      var cch1 = new android.widget.Switch(context);
      cch1.setText('Flight');
      cch1.setTextColor(android.graphics.Color[Color]); 
      cch1.setChecked(cc1);      cch1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(
      {
      onCheckedChanged:function()
      {
 if(Level.getGameMode()!=1)
      {
      if(!cc1)
      {
      cc1= true;
      //Your Code Here...
      print("Active.");
      Player.setCanFly(true);
      }
      else
      {
      cc1 = false;
      //Your Code Here...
      print("Inactive.");
      Player.setCanFly(false);
      }
      }
         else
         {
   print("You are in creative.")
   }   
      cch1.setChecked(cc1);
      }
      }
      ));
      menuLayout.addView(cch1);
 
 
 
 
  var cch5 = new android.widget.Switch(context);
      cch5.setText('NoDown');
      cch5.setTextColor(android.graphics.Color[Color]); 
      cch5.setChecked(cc5);
      cch5.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc5){
      cc5= true;
      issue_5_20=true;
      print("Active. Now nothing can make you fall. Do not forget to activate standart flight.")
      //Your Code Here...
      }else{
      cc5 = false;
      issue_5_20=false;
      //Your Code Here...
      print("Inactive.")
      }
      cch5.setChecked(cc5);
      }
      }));
      menuLayout.addView(cch5);
 
 
 
  
 
  var cch6 = new android.widget.Switch(context);
      cch6.setText('Turn upgrade off on sneaking');
      cch6.setTextColor(android.graphics.Color[Color]); 
      cch6.setChecked(cc6);
      cch6.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc6){
      cc6= true;
      print("Active.")
      //Your Code Here...
      }else{
      cc6 = false;
      //Your Code Here...
      print("Inactive.")
      }
      cch6.setChecked(cc6);
      }
      }));
      menuLayout.addView(cch6);
 
 
 
 
 
  var cch2 = new android.widget.Switch(context);
      cch2.setText('VisualRoad');
      cch2.setTextColor(android.graphics.Color[Color]); 
      cch2.setChecked(cc2);
      cch2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc2){
      cc2= true;
      print("Active. Watch down.")
      //Your Code Here...
      }else{
      cc2 = false;
      //Your Code Here...
      print("Inactive.")
      }
      cch2.setChecked(cc2);
      }
      }));
      menuLayout.addView(cch2);
 
 
                       
 
 
  var cch3 = new android.widget.Switch(context);
      cch3.setText('Tower');
      cch3.setTextColor(android.graphics.Color[Color]); 
      cch3.setChecked(cc3);
      cch3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc3){
      cc3= true;
      print("Active. Tap any block to get higher.")
      //Your Code Here...
      }else{
      cc3 = false;
      //Your Code Here...
      print("Inactive.")
      }
      cch3.setChecked(cc3);
      }
      }));
      menuLayout.addView(cch3);
 
 
                         
    
    
  var cch4 = new android.widget.Switch(context);
      cch4.setText('Gamemode');
      cch4.setTextColor(android.graphics.Color[Color]); 
      cch4.setChecked(cc4);
      cch4.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc4){
      cc4= true;
      print("You are in Creative now.")
      Level.setGameMode(1);
      //Your Code Here...
      }else{
      cc4 = false;
      //Your Code Here...
      print("You are in Survival now.")
      Level.setGameMode(0);
      }
      cch4.setChecked(cc4);
      }
      }));
      menuLayout.addView(cch4);   
    
    
    
  







//fastEatOn(256)
//fastEatOff(256)
var cch13 = new android.widget.Switch(context);
      cch13.setText('InstantEat');
      cch13.setTextColor(android.graphics.Color[Color]); 
      cch13.setChecked(cc13);
      cch13.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc13){
      cc13= true;
      fastEatOn(256)
   print("InstantEat active.");
      //Your Code Here...
      }else{
      cc13 = false;
      fastEatOff(256);
      //Your Code Here...
      print("Inactive.");
      
      }
      cch13.setChecked(cc13);
      }
      }));
      menuLayout.addView(cch13);

var cch15 = new android.widget.Switch(context);
      cch15.setText('DestroView');
      cch15.setTextColor(android.graphics.Color[Color]); 
      cch15.setChecked(cc15);
      cch15.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc15){
      cc15= true;
   print("DestroView active. Now you are breaking blocks by view.");
      //Your Code Here...
      }else{
      cc15 = false;
      //Your Code Here...
      print("DestroView inactive.");
      
      }
      cch15.setChecked(cc15);
      }
      }));
      menuLayout.addView(cch15);



var cch18 = new android.widget.Switch(context);
      cch18.setText('TapTeleport');
      cch18.setTextColor(android.graphics.Color[Color]); 
      cch18.setChecked(cc18);
      cch18.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc18){
      cc18= true;
   print("TapTeleport active. Tap any block to teleport!");
      //Your Code Here...
      }else{
      cc18 = false;
      //Your Code Here...
      print("TapTeleport inactive.");
     
      
      }
      cch18.setChecked(cc18);
      }
      }));
      menuLayout.addView(cch18);


var cch16 = new android.widget.Switch(context);
      cch16.setText('Nuker');
      cch16.setTextColor(android.graphics.Color[Color]); 
      cch16.setChecked(cc16);
      cch16.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc16){
      cc16= true;
   print("Nuker is active. LETS DESTROY THAT WORLD.");
      //Your Code Here...
      }else{
      cc16 = false;
      //Your Code Here...
      print("Nuker inactive.");
      }
      cch16.setChecked(cc16);
      }
      }));
      menuLayout.addView(cch16);





var cch12 = new android.widget.Switch(context);
      cch12.setText('AntiKnockBack');
      cch12.setTextColor(android.graphics.Color[Color]); 
      cch12.setChecked(cc12);
      cch12.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc12){
      cc12= true;
   print("AntiKnockBack active.");
      //Your Code Here...
      }else{
      cc12 = false;
      //Your Code Here...
      print("AntiKnockBack inactive.");
      }
      cch12.setChecked(cc12);
      }
      }));
      menuLayout.addView(cch12);





var cch17 = new android.widget.Switch(context);
      cch17.setText('Sprint&Jump');
      cch17.setTextColor(android.graphics.Color[Color]); 
      cch17.setChecked(cc17);
      cch17.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc17){
      cc17= true;
   print("Sprint&Jump active.");
      //Your Code Here...
      }else{
      cc17 = false;
      //Your Code Here...
      print("Sprint&Jump inactive.");
      }
      cch17.setChecked(cc17);
      }
      }));
      menuLayout.addView(cch17);




  var cch19 = new android.widget.Switch(context);
      cch19.setText("Teleport to spawn on low HP");
      cch19.setTextColor(android.graphics.Color[Color]); 
      cch19.setChecked(cc19);
      cch19.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc19){
      cc19= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc19 = false;
      //Your Code Here...
      print("Inactive.");
      
      }
      cch19.setChecked(cc19);
      }
      }));
      menuLayout.addView(cch19);
   
 var cch20 = new android.widget.Switch(context);
      cch20.setText("No walls");
      cch20.setTextColor(android.graphics.Color[Color]); 
      cch20.setChecked(cc20);
      cch20.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc20){
      cc20= true;
     issue_5_20=cc5; Entity.setCollisionSize(getPlayerEnt(),0,0);
      cc5=true;
   print("Active.");
      //Your Code Here...
      }else{
      cc20 = false;
      cc5=issue_5_20;
      //Your Code Here...
      print("Inactive.");
      Entity.setCollisionSize(getPlayerEnt(), 1, 2);
      }
      cch20.setChecked(cc20);
      }
      }));
      menuLayout.addView(cch20);
    var cch21 = new android.widget.Switch(context);
      cch21.setText("BowZoom");
      cch21.setTextColor(android.graphics.Color[Color]); 
      cch21.setChecked(cc21);
      cch21.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc21){
      cc21= true;
      
   print("Active.");
      //Your Code Here...
      }else{
      cc21 = false;
       //Your Code Here...
      print("Inactive.");
    ModPE.resetFov();
      }
      cch21.setChecked(cc21);
      }
      }));
      menuLayout.addView(cch21);
 var cch22 = new android.widget.Switch(context);
      cch22.setText("AntiFlame (singleplayer)");
      cch22.setTextColor(android.graphics.Color[Color]); 
      cch22.setChecked(cc22);
      cch22.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc22){
      cc22= true;
      
   print("Active. Singleplayer only!!!");
      //Your Code Here...
      }else{
      cc22 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch22.setChecked(cc22);
      }
      }));
      menuLayout.addView(cch22);
      
       var cch23 = new android.widget.Switch(context);
      cch23.setText("AimBot");
    //СУКА НЕ ВОРУЙ КОД ПОШЕЛ НАХУЙ ОТСЮДА
      cch23.setTextColor(android.graphics.Color[Color]); 
      cch23.setChecked(cc23);
      cch23.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc23){
      cc23= true;
      
   print("Active.");
      //Your Code Here...
      }else{
      cc23 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch23.setChecked(cc23);
      }
      }));
      menuLayout.addView(cch23);
   
      
      var aimbot_length_seekbar= new android.widget.SeekBar(context);
     aimbot_length_seekbar.setMax(15);
aimbot_length_seekbar.setProgress(curcurc-5);  aimbot_length_seekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      curcurc=aimbot_length_seekbar.getProgress()+5;
      }
      });
      menuLayout.addView(aimbot_length_seekbar);
      
      
         var cch24 = new android.widget.Switch(context);
      cch24.setText("HighJump");
      cch24.setTextColor(android.graphics.Color[Color]); 
      cch24.setChecked(cc24); cch24.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc24){
      cc24= true;
      
   print("Active.");
      //Your Code Here...
      }else{
      cc24 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch24.setChecked(cc24);
      }
      }));
      menuLayout.addView(cch24);  
           var cch25 = new android.widget.Switch(context);
      cch25.setText("CroachSpeed");
      cch25.setTextColor(android.graphics.Color[Color]); 
      cch25.setChecked(cc25); cch25.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc25){
      cc25= true;
      
   print("Active.");
      //Your Code Here...
      }else{
      cc25 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch25.setChecked(cc25);
      }
      }));
      menuLayout.addView(cch25); 
                       var cch26 = new android.widget.Switch(context);
      cch26.setText("Spider");
      cch26.setTextColor(android.graphics.Color[Color]); 
      cch26.setChecked(cc26); cch26.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc26){
      cc26= true;
      
   print("Active.");
      //Your Code Here...
      }else{
      cc26 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch26.setChecked(cc26);
      }
      }));
      menuLayout.addView(cch26);
      
                             var cch27 = new android.widget.Switch(context);
          cch27.setText("Fly for 0.16+");
      cch27.setTextColor(android.graphics.Color[Color]); 
      cch27.setChecked(cc27); cch27.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc27){
      cc27= true;
      fuion();
   print("Active.");
      //Your Code Here...
      }else{
      cc27 = false;
      fuioff();
      //Your Code Here...
      print("Inactive.");
    
      }
      cch27.setChecked(cc27);
      }
      }));
      menuLayout.addView(cch27); 
      
      
                                  var cch28 = new android.widget.Switch(context);
          cch28.setText("EntityRadar (W.I.P.)");
      cch28.setTextColor(android.graphics.Color[Color]); 
      cch28.setChecked(cc28); cch28.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc28){
      cc28= true;
   print("Active.(Work in progress. May not work on servers.)");
      //Your Code Here...
      }else{
      cc28 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch28.setChecked(cc28);
      }
      }));
      menuLayout.addView(cch28); 
      
      
      var cch29 = new android.widget.Switch(context);
          cch29.setText("Hide cheat button");
      cch29.setTextColor(android.graphics.Color[Color]); 
      cch29.setChecked(cc29); cch29.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc29){
      cc29= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc29 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch29.setChecked(cc29);
      }
      }));
      menuLayout.addView(cch29); 
      
      var cch30 = new android.widget.Switch(context);
          cch30.setText("JetPack");
      cch30.setTextColor(android.graphics.Color[Color]); 
      cch30.setChecked(cc30); cch30.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc30){
      cc30= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc30 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch30.setChecked(cc30);
      }
      }));
      menuLayout.addView(cch30); 
   
            var PFSC = new android.widget.SeekBar(context);
      PFSC.setMax(14);
      PFSC.setProgress(PFS*10-1);
      PFSC.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      PFS=(PFSC.getProgress()+1)/10;
      }
      });
      menuLayout.addView(PFSC);
         var cch31 = new android.widget.Switch(context);
          cch31.setText("TapVelocity");
      cch31.setTextColor(android.graphics.Color[Color]); 
      cch31.setChecked(cc31); cch31.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc31){
      cc31= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc31 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch31.setChecked(cc31);
      }
      }));
      menuLayout.addView(cch31);     
      
      
               var cch32= new android.widget.Switch(context);
          cch32.setText("TapSpeedUp");
      cch32.setTextColor(android.graphics.Color[Color]); 
      cch32.setChecked(cc32); cch32.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc32){
      cc32= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc32 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch32.setChecked(cc32);
      }
      }));
      menuLayout.addView(cch32);  
            
               var cch33= new android.widget.Switch(context);
          cch33.setText("MegaHit");
      cch33.setTextColor(android.graphics.Color[Color]); 
      cch33.setChecked(cc33); cch33.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc33){
      cc33= true;
   print("Active.");
      //Your Code Here...
      }else{
      cc33 = false;
      //Your Code Here...
      print("Inactive.");
    
      }
      cch33.setChecked(cc33);
      }
      }));
     menuLayout.addView(cch33);    
     var textf = new android.widget.TextView(context);
        textf.setTextSize(25);
        textf.setText('Effect\nfunctions');
        textf.setGravity(android.view.Gravity.CENTER);
        textf.setTextColor(android.graphics.Color[Color]);

        menuLayout.addView(textf);
          
                              var svk = new android.widget.Button(context);
      svk.setText('Add effect');   svk.setTextColor(android.graphics.Color[Color]); 
      svk.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){  addEff()
      }
      }));
      menuLayout.addView(svk);
      
   
       var nb1 = new android.widget.Button(context);
      nb1.setText('Remove all effects');
      nb1.setTextColor(android.graphics.Color[Color]); 
      nb1.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){try{Entity.removeAllEffects(getPlayerEnt());}catch(err){print("Join any world/server first.");} }
      }));
      menuLayout.addView(nb1);
    
     var textd = new android.widget.TextView(context);
        textd.setTextSize(25);
        textd.setText('Glide functions');
        textd.setGravity(android.view.Gravity.CENTER);
        textd.setTextColor(android.graphics.Color[Color]);
        
        menuLayout.addView(textd);
      



 var cch7 = new android.widget.Switch(context);
      cch7.setText('Glide');
      cch7.setTextColor(android.graphics.Color[Color]); 
      cch7.setChecked(cc7);
      cch7.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cc7){
      cc7= true;
      print("Active. Settings are situated lower.")
      //Your Code Here...
      }else{
      cc7 = false;
      //Your Code Here...
      print("Glide inactive.")
      }
     
      cch7.setChecked(cc7);
      }
      }));
      menuLayout.addView(cch7);




var note5 = new android.widget.TextView(context); 
note5.setText("Choose Glide force.\nCurrent force: "+glide*plumin); 
note5.setTextColor(android.graphics.Color[Color]); 
note5.setTextSize(15); 
menuLayout.addView(note5);  


var prog= glide*plumin+plumin;
      var sp = new android.widget.SeekBar(context);
      sp.setMax(plumin*2);
      sp.setProgress(prog);
      sp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      prog=sp.getProgress();
      glide=(prog-plumin)/plumin;
      note5.setText("Choose Glide force.\nCurrent force: "+glide*plumin);
      }
      });
      menuLayout.addView(sp);
     
    
  
    
    
     var textb = new android.widget.TextView(context);
        textb.setTextSize(25);
        textb.setText('Microteleport\nfunctions');
        textb.setGravity(android.view.Gravity.CENTER);
        textb.setTextColor(android.graphics.Color[Color]);

        menuLayout.addView(textb);
          
    
      var svcb = new android.widget.Button(context);
      svcb.setText('Save TP coords');
      svcb.setTextColor(android.graphics.Color[Color]); 
      svcb.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      save();
      }
      }));
      menuLayout.addView(svcb);

var svcb2 = new android.widget.Button(context);
      svcb2.setText('Teleport');
      svcb2.setTextColor(android.graphics.Color[Color]); 
      svcb2.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      tptosave();
      }
      }));
      menuLayout.addView(svcb2);


    
    
    
    
          var textc = new android.widget.TextView(context);
        textc.setTextSize(25);
        textc.setText('Choose menu\nplacement');
        textc.setGravity(android.view.Gravity.CENTER);
        textc.setTextColor(android.graphics.Color[Color]);
        
        menuLayout.addView(textc);
        
                         var svkb1 = new android.widget.Button(context);
      svkb1.setText('Left');
      svkb1.setTextColor(android.graphics.Color[Color]); 
      svkb1.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){   curloc=android.view.Gravity.LEFT | android.view.Gravity.TOP;
    try{  Effectmenu.dismiss();}catch(e){}
      effectMenu();
      }
      }));
      menuLayout.addView(svkb1);
      
      var svkb2 = new android.widget.Button(context);
      svkb2.setText('Center');
      svkb2.setTextColor(android.graphics.Color[Color]); 
      svkb2.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){   curloc=android.view.Gravity.BOTTOM | android.view.Gravity.TOP;
   try{   Effectmenu.dismiss();}catch(e){}
      effectMenu();
      }
      }));
      menuLayout.addView(svkb2);
   
      var svkb3 = new android.widget.Button(context);
      svkb3.setText('Right');
      svkb3.setTextColor(android.graphics.Color[Color]); 
      svkb3.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){   curloc=android.view.Gravity.RIGHT | android.view.Gravity.TOP;
   try{   Effectmenu.dismiss();}catch(e){}
      effectMenu();
      }
      }));
      menuLayout.addView(svkb3);
      
            var texte = new android.widget.TextView(context);
        texte.setTextSize(25);
        texte.setText('Choose text color');
        texte.setGravity(android.view.Gravity.CENTER);
        texte.setTextColor(android.graphics.Color[Color]);
        
        menuLayout.addView(texte);
         
var butto = new android.widget.Button(context);
butto.setTextColor(android.graphics.Color[Color]); 
      butto.setText('Choose color');
      butto.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
            setting=false;
      if(setting==false)
      {
      try{mainMenu();}catch(err){}
      }

try{Effectmenu.dismiss();}catch(e){}

try{}catch(err){}
      }
      }));
      menuLayout.addView(butto);
      
      
                         
       Effectmenu = new android.widget.PopupWindow(menuLayout1, context.getWindowManager().getDefaultDisplay().getWidth()/2.2, context.getWindowManager().getDefaultDisplay().getHeight());
  Effectmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  Effectmenu.showAtLocation(context.getWindow().getDecorView(), curloc, 0, 0);
  }catch(error){
  print('An error occured: ' + error);
  }}}));   }
  /*Вот и весь чит*/
   
   
//функции

//
//
//
var curloc = android.view.Gravity.BOTTOM | android.view.Gravity.TOP;
//
//
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
function vaad(x,y,z){this.x=x;this.y=y;this.z=z;};

function check4Vel(ve)
{
var xa=Math.round(ve.x)-ve.x;var txa=xa;if(xa<0)xa=-xa;
var za=Math.round(ve.z)-ve.z;var tza=za;if(za<0)za=-za;
{
var trr1=(xa<0.31);var trr2=(za<0.31);
var dddk=Level.getTile(Math.floor(ve.x+3*txa),Math.floor(ve.y),Math.floor(ve.z+3*tza));
if(dddk!=0&&dddk!=50)
{
Entity.setVelY(getPlayerEnt(),0.7);
}
}
}
var FlyUI;
var f_up=false;
var f_down=false;
var cc27=false;//FlyNoKick
      function fuion(){
      
      context.runOnUiThread(new java.lang.Runnable({ run: function(){
      try{
      var layot = new android.widget.LinearLayout(context);
      layot.setOrientation(1);
     
      var up_b = new android.widget.Button(context);
      up_b.setText('U');
      up_b.setOnTouchListener(new android.view.View.OnTouchListener({
      onTouch: function(view, event){
      switch(event.getAction()){
      case 0:
      f_up = true;
      //Your Code Here...
      break;
      case 1:
      f_up = false;
      //Your Code Here...
      break;
      }
      return true;
      }
      }));
      layot.addView(up_b);

          var down_b = new android.widget.Button(context);
      down_b.setText('D');
      down_b.setOnTouchListener(new android.view.View.OnTouchListener({
      onTouch: function(view, event){
      switch(event.getAction()){
      case 0:
      f_down = true;
      //Your Code Here...
      break;
      case 1:
      f_down = false;
      //Your Code Here...
      break;
      }
      return true;
      }
      }));
      layot.addView(down_b);
      FlyUI = new android.widget.PopupWindow(layot, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
      FlyUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      FlyUI.showAtLocation(context.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 100);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }

       function fuioff(){
      var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      context.runOnUiThread(new java.lang.Runnable({ run: function(){
      if(FlyUI != null){
      FlyUI.dismiss();
      FlyUI = null;
      }
      }}));
      }
 function VelToTap(x,y,z)
 {moveME(getPlayerEnt(),[x+0.5,y+2,z+0.5],0.9); }   
     function getDis(e1, e2){
  var xdis = Entity.getX(e1) - e2[0];
  var ydis = Entity.getY(e1) - e2[1];
  var zdis = Entity.getZ(e1) - e2[2];
  var dis = Math.sqrt(xdis*xdis+ydis*ydis+zdis*zdis)
  return dis;
}
function moveME(ME, target, speed){
  var xdis = target[0] - Entity.getX(ME);
  var ydis = target[1] - Entity.getY(ME);
  var zdis = target[2] - Entity.getZ(ME);
  var dis = getDis(ME, target);
  xdis /= dis; ydis /= dis; zdis /= dis;
  xdis *= speed; ydis *= speed; zdis *= speed;
  setVelX(ME, xdis);
  setVelY(ME, ydis);
  setVelZ(ME, zdis);
}
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();


var file = {
select:function(dir, fileName)
{
return (new File(dir, fileName));
},
exists:function(selectedFile)
{
return selectedFile.exists();
},
create:function(selectedFile)
{
selectedFile.createNewFile();
return selectedFile;
},
del:function(selectedFile)
{
selectedFile.delete();
},
read:function(selectedFile)
{
var readed = (new BufferedReader(new FileReader(selectedFile)));
var data = new StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append('\n');
}
return data.toString();
},
readLine:function(selectedFile, line)
{
var readT = new file.read(selectedFile);
var lineArray = readT.split('\n');
return lineArray[line - 1];
},
write:function(selectedFile, text)
{
file.rewrite(selectedFile, (new file.read(selectedFile)) + text);
},
rewrite:function(selectedFile, text)
{
var writeFOS = new FOS(selectedFile);
writeFOS.write(new String(text).getBytes());
}
};

var Playr={tpSpawn:function(){Server.sendChat("/spawn");Server.sendChat("/lobby");Server.sendChat("/hub");Server.sendChat("/heal");
}}

/*Example - Create new file*/

var baza = new file.select(sdcard + "/games/com.mojang/", "baza.txt");
 

var num=0

function getPass()
{
num++
	try
	{
var pass=file.readLine(baza,num)
return pass;
	}
	catch(err)
	{
		num=0
		return null
		}
}
var prefix="/login "
function send()
{
var gett=getPass()
if(gett!=null)
{
//code
var ff=prefix+''+gett+''
Server['sendChat'](ff)
clientMessage("Paasword sent.")
}
else
{
clientMessage("Base reloaded.")
num=0
}
}
var lbl=[0,-1,0];
var vtimer=0;






var prr=[]
function visualRoad()
{
if(cc2==true)
{
vtimer++;
if(vtimer>=5)
{
vtimer=0;
var x=Math.floor(getPlayerX());
var y=Math.floor(getPlayerY());
var z=Math.floor(getPlayerZ());
for(var i=0;i<prr.length;i++)
{
Level.setTile(prr[i][0],prr[i][1],prr[i][2],0)
}
prr=[];
for(var xx=x-1;xx<=x+1;xx++)
{
for(var zz=z-1;zz<=z+1;zz++)
{
if(Level.getTile(xx,y-2,zz)==0)
{
Level.setTile(xx,y-2,zz,1);
prr.push([xx,y-2,zz]);
}
}
}
}
}
}


var JDIt=0;
function JDI(x,y,z)
{
JDIt++;
if(JDIt>=6)
{
var dont=Entity.getAll();
var foundam=0;
var plns=0;
var searradius=8;
for(var i=0;i<dont.length;i++)
{
if(dont[i]!=getPlayerEnt())
{
var ex=Entity.getX(dont[i]);
var ey=Entity.getY(dont[i]);
var ez=Entity.getZ(dont[i]);
var dix=x-ex;var diy=y-ey;var diz=z-ez;
if(dix<0)dix=-dix;
if(diy<0)diy=-diy;
if(diz<0)diz=-diz;
if(dix==0)dix=1;
if(diy==0)diy=1;
if(diz==0)diz=1;
if(dix<=searradius&&diy<=searradius&&diz<=searradius){foundam++;
if(Entity.getEntityTypeId(dont[i])==63){plns++;}}
}}
ModPE.showTipMessage("Search square side length: "+searradius*2+" blocks\nEntities around you found: "+foundam+"\nIncluding "+plns+ " players and floating texts");JDIt=0;
}}
var koef=1.7;//MAX
function css()
{
if(Entity.isSneaking(Player.getEntity()) == true&&cc25)
{
Entity.setVelY(getPlayerEnt(),-111);
Entity.setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*koef); 
Entity.setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*koef);
}
}
var alr=false;
var jum=0.75;
function hj()
{
if(Entity.getVelY(getPlayerEnt())>=-0.07&&!alr){Entity.setVelY(getPlayerEnt(),jum);alr=true;}if(Entity.getVelY(getPlayerEnt())<=-0.07&&Level.getTile(Math.floor(getPlayerX()),Math.floor(getPlayerY())-2,Math.floor(getPlayerZ()))!=0){alr=false;}
}

var vstimer=0;
var lhea=0
var tptimer=0;

function modTick()
{
var x=Math.floor(getPlayerX());
var y=Math.floor(getPlayerY());
var z=Math.floor(getPlayerZ());
if(cc28)
{
JDI(x,y,z);}
if(cc27&&!f_up&&!f_down)Entity.setVelY(getPlayerEnt(),0);
if(f_up)Entity.setVelY(getPlayerEnt(),0.5);
if(f_down)Entity.setVelY(getPlayerEnt(),-0.35);
if(cc26)
check4Vel(new vaad(getPlayerX(),getPlayerY(),getPlayerZ()));
css();
if(cc24)
hj();
if(cc22)
{
var bl=[Math.floor(getPlayerX()),Math.floor(getPlayerY())-1,Math.floor(getPlayerZ())];
for(var xx=lbl[0]-1;xx<=lbl[0]+1;xx++)
for(var yy=lbl[1]-1;yy<=lbl[1]+1;yy++)
for(var zz=lbl[2]-1;zz<=lbl[2]+1;zz++)
if(((Level.getTile(xx,yy,zz)>=8)&&(Level.getTile(xx,yy,zz)<=11))||(Level.getTile(xx,yy,zz)==0))
Level.setTile(xx,yy,zz,0)
Level.setTile(bl[0],bl[1],bl[2],9)
lbl=bl;
}
//1.BowZoom
if(cc21)
{
if(getCarriedItem()==261)
{
ModPE.setFov(25)
}else{
ModPE.resetFov();
}
}
//2.AntiFlame
if(cc22)
{
Entity.setFireTicks(getPlayerEnt(),0)
}
tptimer++;
if(cc_a.length>0&&tptimer>=5)
{
tptimer=0;
Entity.setPosition(getPlayerEnt(),cc_a[cc_a.length-1][0],cc_a[cc_a.length-1][1],cc_a[cc_a.length-1][2]);
cc_a.splice(cc_a.length-1,1);
}
if(cc19)
{
if(Entity.getHealth(getPlayerEnt())<=6)
{
Playr.tpSpawn();
cc19=false;
print("Teleporting... Function is now deactivated in case of preventing bugs.")
}
}
if(cc17){sap();}
if(cc16)
{
vstimer++
if(vstimer>=7)
{
vstimer=0
for(var xx=x-2;xx<=x+2;xx++)
{
for(var zz=z-2;zz<=z+2;zz++)
{
for(var yy=y-2;yy<=y+2;yy++)
{
Level.destroyBlock(xx,yy,zz)
}
}
}
}
}
if(cc15)
{
Level.destroyBlock(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ())
}
if(Entity.getHealth(getPlayerEnt())<lhea)
{
atkD()
}
lhea=Entity.getHealth(getPlayerEnt())
if(cc12&&akb)
{
akt++;
Entity.setPosition(getPlayerEnt(),tx,ty,tz);
Entity.setVelX(getPlayerEnt(),0);
Entity.setVelY(getPlayerEnt(),0);
Entity.setVelZ(getPlayerEnt(),0);
if(akt>=5)
{
akb=false;
akt=0;
ecshmo(tx,ty,tz);
}
}
if(cc11)
{
if(!(Entity.getHealth(selpl)>0))
{
ModPE.setCamera(getPlayerEnt());
}
}
if(cc7)
{
Entity.setVelY(getPlayerEnt(),glide)
}

if(cc1||cc4)
{
Player.setCanFly(true);
}

		
		
		
		
		
		if(cc33) {
		
		var mobs = Entity.getAll();
		var players = Server.getAllPlayers();
		
		for (var i = 0; i < mobs.length; i++) {
            if(isInRange(mobs[i], ffrange) && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){
				Entity.setCollisionSize(mobs[i], ffwidth, ffheight);
            }
        }
        for (var i = 0; i < players.length; i++) {
            if(isInRange(players[i], ffrange) && isValid(players[i]) && Entity.getHealth(players[i]) >= 1){
                Entity.setCollisionSize(players[i], ffwidth, ffheight);
            }
        }
		
	} else if(!cc33) {
		
		var mobs = Entity.getAll();
		var players = Server.getAllPlayers();
		
		for (var i = 0; i < mobs.length; i++) {
            if(isInRange(mobs[i], ffrange) && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){
                Entity.setCollisionSize(mobs[i], 1, 2);
            }
        }
        for (var i = 0; i < players.length; i++) {
            if(isInRange(players[i], ffrange) && isValid(players[i]) && Entity.getHealth(players[i]) >= 1){
                Entity.setCollisionSize(players[i], 1, 2);
            }
        }
		
	}
if (cc23) {
var a = Entity['getAll']();
var b = Server['getAllPlayers']();
var c = curcurc;
var d = null;
for (var e = 0; e < a['length']; e++) {
var f = Entity['getX'](a[e]) - getPlayerX();
var g = Entity['getY'](a[e]) - getPlayerY();
var h = Entity['getZ'](a[e]) - getPlayerZ();
var i = Math['sqrt'](Math['pow'](f, 2) + Math['pow'](g, 2) + Math['pow'](h, 2));
if (i < c && i > 0 && Entity['getEntityTypeId'](a[e]) <= 63 && Entity['getHealth'](a[e]) >= 1) {
c = i;
d = a[e];
}
}
for (var e = 0; e < b['length']; e++) {
var f = Entity['getX'](b[e]) - getPlayerX();
var g = Entity['getY'](b[e]) - getPlayerY();
var h = Entity['getZ'](b[e]) - getPlayerZ();
var i = Math['sqrt'](Math['pow'](f, 2) + Math['pow'](g, 2) + Math['pow'](h, 2));
if (i < c && i > 0 && Entity['getHealth'](b[e]) >= 1) {
c = i;
d = b[e];
}
}
if (null != d) {
var f = Entity['getX'](d) - getPlayerX();
var g = Entity['getY'](d) - getPlayerY();
var h = Entity['getZ'](d) - getPlayerZ();
if (63 != Entity['getEntityTypeId'](d)) g += .5;
var j = .5 + Entity['getX'](d);
var k = Entity['getY'](d);
var l = .5 + Entity['getZ'](d);
var m = Math['sqrt'](f * f + g * g + h * h);
var g = g / m;
var n = Math['asin'](g);
n = 180 * n / Math['PI'];
n = -n;
if (n < 90 && n > -90) Entity['setRot'](Player['getEntity'](), -Math['atan2'](j - (Player['getX']() + .5), l - (Player['getZ']() + .5)) * (180 / Math['PI']), n);
}
}

if(cc5&&!(Entity.isSneaking(getPlayerEnt())&&cc6))
{
var player=getPlayerEnt()
var currentVelY=Entity.getVelY(player)
if(currentVelY<=0)
{
Entity.setVelY(player,0)	
}
}
visualRoad()
if(spam==true)
{
timer++
if(timer>=mtimer)
{
timer=0
if(ipl==true)
{
Server.sendChat(comm+pl+" "+gr+sptextt)
}
else
{
Server.sendChat(comm+gr+sptextt);
}
}
}
if(cc30)
{
var playerDir=toDirectionalVector((getYaw() + 90 ) *  Math . PI / 180 , getPitch() *  Math . PI / 180 * - 1);
var player = getPlayerEnt();
setVelX(player, PFS * playerDir[ 0 ]);
setVelY(player, PFS * playerDir[ 1 ]);
setVelZ(player, PFS * playerDir[ 2 ]);
Level.playSoundEnt(getPlayerEnt(), "fire.fire", 100, 100)
}
}
function toDirectionalVector(yaw, pitch) {var vector=[Math . cos (yaw) * Math . cos (pitch),Math . sin (pitch),Math . sin (yaw) * Math . cos (pitch)];return vector;
}

function useItem(x, y, z, itemId, blockId, side)
{
if(cc3)
{
Entity.setVelY(getPlayerEnt(),0.5)
}
if(cc18){Entity.setPosition(getPlayerEnt(),x,y+3,z)}
if(cc31){VelToTap(x,y,z);}
if(cc32){
var koeffi=4;if(Math.abs(Entity.getVelX(getPlayerEnt()))<=0.3||Math.abs(Entity.getVelZ(getPlayerEnt())<=0.3))koeffi=10;
Entity.setVelX(getPlayerEnt(),(Entity.getVelX(getPlayerEnt())*koeffi));
Entity.setVelZ(getPlayerEnt(),(Entity.getVelZ(getPlayerEnt())*koeffi));
}
}


var uspe = 2;


function newLevel()
{
cp()
lhea=Entity.getHealth(getPlayerEnt())
var f=Level.getGameMode();
var l=(f==1);
print('Some functions were resetted.');
cc4 = l//Gamemode
akb=false;
was_saved=false;
}



var sp;
function sap()
{
var plae=getPlayerEnt()
var smt=(Math.floor((Player.getY()-Math.floor(Player.getY()))*100));
var x=Math.floor(getPlayerX())
var y=Math.floor(getPlayerY())
var z=Math.floor(getPlayerZ())
var block_under=Level.getTile(x,y-2,z,1)
var is_u=(block_under!=0)
if((Entity.getVelY(plae<=-0.07))&&(smt<=65&&smt>=60)&&is_u)
{
Entity.setVelY(plae,0.5)
Entity.setVelX(plae,Entity.getVelX(plae)*2)
Entity.setVelZ(plae,Entity.getVelZ(plae)*2)
}
sp=smt;
}




var acc;
var was_saved=false;

function save()
{
was_saved=true; acc={x:getPlayerX(),y:getPlayerY(),z:getPlayerZ()};
}

var glide=0
var plumin=16

var c_a=[];
var cc_a=[];


function tptosave()
{
var ac={x:getPlayerX(),y:getPlayerY(),z:getPlayerZ()};
var bc={x:acc.x,y:acc.y,z:acc.z};
c_a=[];
var xp=1;
var yp=1;
var zp=1;
if(ac.x>bc.x){xp=-1;}
if(ac.y>bc.y){yp=-1;}
if(ac.z>bc.z){zp=-1;}
if(xp==1)
for(var gx=ac.x;gx<=bc.x;gx++)
c_a[c_a.length]=[gx,ac.y,ac.z];
if(xp==-1)
for(var gx=ac.x;gx>=bc.x;gx--)
c_a[c_a.length]=[gx,ac.y,ac.z];
if(yp==1)
for(var gy=ac.y;gy<=bc.y;gy++)
c_a[c_a.length]=[bc.x,gy,ac.z];
if(yp==-1)
for(var gy=ac.y;gy>=bc.y;gy--)
c_a[c_a.length]=[bc.x,gy,ac.z];
if(zp==1)
for(var gz=ac.z;gz<=bc.z;gz++)
c_a[c_a.length]=[bc.x,bc.y,gz];
if(zp==-1)
for(var gz=ac.z;gz>=bc.z;gz--)
c_a[c_a.length]=[bc.x,bc.y,gz];
if(was_saved)
{
cc_a=c_a.reverse();
print("Teleporting... Please wait.")
}
else{print("Error.")}
}



var akb=false;
var tx=0;
var ty=0;
var tz=0;


function attackHook(a,v)
{
if((a==getPlayerEnt())&&cc10)
{
Entity.rideAnimal(a,v)
}
if(cc11){selpl=v;ModPE.setCamera(selpl)}
}


function atkD()
{
if((cc12))
{
print("AntiKnockBack!")
tx=getPlayerX()
ty=getPlayerY()
tz=getPlayerZ()
akb=true;
}
}





function ecshmo(x,y,z)
{
x=Math.floor(x)
y=Math.floor(y)
z=Math.floor(z)
for(var xi=x-1;xi<=x+1;xi++)
{
for(var yi=y+2;yi>=y-2;yi--)
{
for(var zi=z-1;zi<=z+1;zi++)
{
if((Level.getTile(xi,yi,zi)!=0)&&Level.getTile(xi,yi+1,zi==0))
{
Entity.setPosition(getPlayerEnt(),xi+0.5,yi+2,zi+0.5)
break;/*nahuibystrosuka*/
}
}
}
}
}

function addEff()
      {
      var effAlert = new android.app.AlertDialog.Builder(context);
     effAlert.setTitle('Add effect');
      var layout = new android.widget.LinearLayout(context);
            var scroll = new android.widget.ScrollView(context);
      layout.setOrientation(1);
      var note = new android.widget.TextView(context); 
      note.setText('Write effect id (from 1 to 23)');  note.setTextColor(android.graphics.Color.BLACK);
      note.setTextSize(17);
      
          var addEf = new android.widget.EditText(context); 
      addEf.setHint('Effect id'); 
 addEf.setTextSize(17);
      
            var note1 = new android.widget.TextView(context); 
            var ea=[MobEffect.absorption,MobEffect.blindness,MobEffect.confusion,MobEffect.damageBoost,MobEffect.damageResistance,MobEffect.digSlowdown,MobEffect.digSpeed,MobEffect.fireResistance,MobEffect.harm,MobEffect.heal,MobEffect.healthBoost,MobEffect.hunger,MobEffect.invisibility,MobEffect.jump,MobEffect.movementSlowdown,MobEffect.movementSpeed,MobEffect.nightVision,MobEffect.poison,MobEffect.regeneration,MobEffect.saturation,MobEffect.waterBreathing,MobEffect.weakness,MobEffect.wither];
var eah=["Absorption","Blindness","Confusion","Strength","Protection","Dig Slowdown","Dig speed up","Fire resistance","Harm","Heal","Health boost","Hunger","Invisibility","Jump boost","Slowness","Speed","Night Vision","Poison","Regeneration","Saturation","Water breathing","Weakness","Wither"];
var tet="\nEffect ids:\n";
for(var i=0;i<ea.length;i++)
{tet=tet+eah[i]+" : "+ea[i]+"\n";}
      note1.setText(tet);
      note1.setTextColor(android.graphics.Color.BLACK);
      note1.setTextSize(17);
      
      layout.addView(note); 
      layout.addView(addEf);
      layout.addView(note1);
      scroll.addView(layout);
      effAlert.setView(scroll); 
      effAlert.setPositiveButton('Get effect', new android.content.DialogInterface.OnClickListener(){ 
      onClick: function(viewarg){
      try{Entity.addEffect(getPlayerEnt(), addEf.getText().toString() , 10000*20, 5, true, false);
      }catch(e){print("Join any world and try again");}}});
      effAlert.setNegativeButton('Cancel', new android.content.DialogInterface.OnClickListener(){ 
      onClick: function(viewarg){
      
      }});
      var dialog = effAlert.create();
      dialog.show();
      }





//IE



 function fastEatOn(id) {
    Item.setProperties(4 + id, {
    "name": "apple",
    "id": 4,
    "icon": "apple",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(66 + id, {
    "name": "golden_apple",
    "id": 66,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": uspe,
    "foil": false,
    "hover_text_color": "aqua",

    "food": {
      "nutrition": 4, 
      "saturation_modifier": "supernatural",
      "is_meat": false, 
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 1
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        }
      ],
      "enchanted_effects": [
        {
          "name": "regeneration",
          "chance": 0.66,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 0.66,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(210 + id, {
    "name": "appleEnchanted", 
    "id": 210,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "hand_equipped": false,
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": uspe,
    "foil": true,
    "hover_text_color": "light_purple",

    "food": {
      "nutrition": 4,
      "saturation_modifier": "supernatural",
      "is_meat": false,
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(26 + id, {
    "name": "mushroom_stew",
    "id": 26,
    "icon": "mushroom_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": false,
      "using_converts_to": "item.bowl"
    }
  });
  Item.setProperties(41 + id, {
    "name": "bread",
    "id": 41,
    "icon": "bread",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(63 + id, {
    "name": "porkchop",
    "id": 63,
    "icon": "porkchop_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(64 + id, {
    "name": "porkchop_cooked",
    "id": 64,
    "icon": "porkchop_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(93 + id, {
    "name": "fish",
    "id": 93,
    "icon": "fish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(204 + id, {
    "name": "salmon",
    "id": 204,
    "icon": "salmon",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(205 + id, {
    "name": "clownfish",
    "id": 205,
    "icon": "clownfish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(206 + id, {
    "name": "pufferfish",
    "id": 206,
    "icon": "pufferfish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "poison",
          "duration": 60,
          "amplifier": 3
        },
        {
          "name": "nausea", 
          "duration": 15,
          "amplifier": 1
        },
        {
          "name": "hunger",
          "duration": 15,
          "amplifier": 2
        }
      ]
    }
  });
  Item.setProperties(94 + id, {
    "name": "cooked_fish",
    "id": 94,
    "icon": "cooked_fish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "eat_sound": "random.burp",
      "is_meat": true
    }
  });
  Item.setProperties(207 + id, {
    "name": "cooked_salmon",
    "id": 207,
    "icon": "cooked_salmon",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(101 + id, {
    "name": "cookie",
    "id": 101,
    "icon": "cookie",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": false
    }
  });
  Item.setProperties(104 + id, {
    "name": "melon",
    "id": 104,
    "icon": "melon",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(107 + id, {
    "name": "beef",
    "id": 107,
    "icon": "beef_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(108 + id, {
    "name": "steak",
    "id": 108,
    "icon": "beef_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(109 + id, {
    "name": "chicken",
    "id": 109,
    "icon": "chicken_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(110 + id, {
    "name": "cooked_chicken",
    "id": 110,
    "icon": "chicken_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(167 + id, {
    "name": "muttonRaw",
    "id": 167,
    "icon": "mutton_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(168 + id, {
    "name": "muttonCooked",
    "id": 168,
    "icon": "mutton_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(111 + id, {
    "name": "rotten_flesh",
    "id": 111,
    "icon": "rotten_flesh",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(119 + id, {
    "name": "spider_eye",
    "id": 119,
    "icon": "spider_eye",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "good",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(135 + id, {
    "name": "carrot",
    "id": 135,
    "icon": "carrot",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "normal",
      "is_meat": false
    },
    "seed": {
      "crop_result": "carrots",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(136 + id, {
    "name": "potato",
    "id": 136,
    "icon": "potato",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "low",
      "is_meat": false
    },
    "seed": {
      "crop_result": "potatoes",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(137 + id, {
    "name": "baked_potato",
    "id": 137,
    "icon": "potato_baked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(138 + id, {
    "name": "poisonous_potato",
    "id": 138,
    "icon": "potato_poisonous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 0.6,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(140 + id, {
    "name": "golden_carrot",
    "id": 140,
    "icon": "carrot_golden",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "supernatural",
      "is_meat": false
    }
  });
  Item.setProperties(144 + id, {
    "name": "pumpkin_pie",
    "id": 144,
    "icon": "pumpkin_pie",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(155 + id, {
    "name": "rabbit",
    "id": 155,
    "icon": "rabbit",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(156 + id, {
    "name": "cooked_rabbit",
    "id": 156,
    "icon": "rabbit_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(157 + id, {
    "name": "rabbit_stew",
    "id": 157,
    "icon": "rabbit_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 10,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": true
    }
  });
  Item.setProperties(201 + id, {
    "name": "beetroot",
    "id": 201,
    "icon": "beetroot",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
    Item.setProperties(203 + id, {
    "name": "beetroot_soup",
    "id": 203,
    "icon": "beetroot_soup",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": false
    }
  
  });
    
    

}





  function fastEatOff(id) {
    Item.setProperties(4 + id, {
    "name": "apple",
    "id": 4,
    "icon": "apple",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(66 + id, {
    "name": "golden_apple",
    "id": 66,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": 32,
    "foil": false,
    "hover_text_color": "aqua",

    "food": {
      "nutrition": 4, 
      "saturation_modifier": "supernatural",
      "is_meat": false, 
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 1
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        }
      ],
      "enchanted_effects": [
        {
          "name": "regeneration",
          "chance": 0.66,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 0.66,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(210 + id, {
    "name": "appleEnchanted", 
    "id": 210,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "hand_equipped": false,
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": 32,
    "foil": true,
    "hover_text_color": "light_purple",

    "food": {
      "nutrition": 4,
      "saturation_modifier": "supernatural",
      "is_meat": false,
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(26 + id, {
    "name": "mushroom_stew",
    "id": 26,
    "icon": "mushroom_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": false,
      "using_converts_to": "item.bowl"
    }
  });
  Item.setProperties(41 + id, {
    "name": "bread",
    "id": 41,
    "icon": "bread",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(63 + id, {
    "name": "porkchop",
    "id": 63,
    "icon": "porkchop_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(64 + id, {
    "name": "porkchop_cooked",
    "id": 64,
    "icon": "porkchop_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(93 + id, {
    "name": "fish",
    "id": 93,
    "icon": "fish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(204 + id, {
    "name": "salmon",
    "id": 204,
    "icon": "salmon",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(205 + id, {
    "name": "clownfish",
    "id": 205,
    "icon": "clownfish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(206 + id, {
    "name": "pufferfish",
    "id": 206,
    "icon": "pufferfish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "poison",
          "duration": 60,
          "amplifier": 3
        },
        {
          "name": "nausea", 
          "duration": 15,
          "amplifier": 1
        },
        {
          "name": "hunger",
          "duration": 15,
          "amplifier": 2
        }
      ]
    }
  });
  Item.setProperties(94 + id, {
    "name": "cooked_fish",
    "id": 94,
    "icon": "cooked_fish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "eat_sound": "random.burp",
      "is_meat": true
    }
  });
  Item.setProperties(207 + id, {
    "name": "cooked_salmon",
    "id": 207,
    "icon": "cooked_salmon",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(101 + id, {
    "name": "cookie",
    "id": 101,
    "icon": "cookie",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": false
    }
  });
  Item.setProperties(104 + id, {
    "name": "melon",
    "id": 104,
    "icon": "melon",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(107 + id, {
    "name": "beef",
    "id": 107,
    "icon": "beef_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(108 + id, {
    "name": "steak",
    "id": 108,
    "icon": "beef_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(109 + id, {
    "name": "chicken",
    "id": 109,
    "icon": "chicken_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(110 + id, {
    "name": "cooked_chicken",
    "id": 110,
    "icon": "chicken_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(167 + id, {
    "name": "muttonRaw",
    "id": 167,
    "icon": "mutton_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(168 + id, {
    "name": "muttonCooked",
    "id": 168,
    "icon": "mutton_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(111 + id, {
    "name": "rotten_flesh",
    "id": 111,
    "icon": "rotten_flesh",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(119 + id, {
    "name": "spider_eye",
    "id": 119,
    "icon": "spider_eye",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "good",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(135 + id, {
    "name": "carrot",
    "id": 135,
    "icon": "carrot",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "normal",
      "is_meat": false
    },
    "seed": {
      "crop_result": "carrots",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(136 + id, {
    "name": "potato",
    "id": 136,
    "icon": "potato",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "low",
      "is_meat": false
    },
    "seed": {
      "crop_result": "potatoes",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(137 + id, {
    "name": "baked_potato",
    "id": 137,
    "icon": "potato_baked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(138 + id, {
    "name": "poisonous_potato",
    "id": 138,
    "icon": "potato_poisonous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 0.6,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(140 + id, {
    "name": "golden_carrot",
    "id": 140,
    "icon": "carrot_golden",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "supernatural",
      "is_meat": false
    }
  });
  Item.setProperties(144 + id, {
    "name": "pumpkin_pie",
    "id": 144,
    "icon": "pumpkin_pie",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(155 + id, {
    "name": "rabbit",
    "id": 155,
    "icon": "rabbit",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(156 + id, {
    "name": "cooked_rabbit",
    "id": 156,
    "icon": "rabbit_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(157 + id, {
    "name": "rabbit_stew",
    "id": 157,
    "icon": "rabbit_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 10,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": true
    }
  });
  Item.setProperties(201 + id, {
    "name": "beetroot",
    "id": 201,
    "icon": "beetroot",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
    Item.setProperties(203 + id, {
    "name": "beetroot_soup",
    "id": 203,
    "icon": "beetroot_soup",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": false
    }
  
  });
  
  
  }