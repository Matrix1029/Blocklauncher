
try{
var View = android.view.View;
var fromHtml = android.text.Html.fromHtml;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var LinearLayout = android.widget.LinearLayout;
var Button = android.widget.Button;
var View = android.view.View;
var ColorStateList = android.content.res.ColorStateList;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var ScrollView = android.widget.ScrollView;
var context = ctx;
var Runnable = java.lang.Runnable;
var MainActivity = ctx;
var MotionEvent = android.view.MotionEvent;
var dx = 0;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var chests2 = [];
var chests = [];
//Rainbow
var espR=0.129;
var espG=0.078;
var espB=1;
var reds = 255;
var greens = 0;
var blues = 0;
var rgbticks = 0;
var rgbspeeds = 8;

var entry;
//Utils made GodSoft
var Utils = {
	        File: { 		
	dragopDir: android.os.Environment.getExternalStorageDirectory() + "/o/", 		
getTextFromFile: function (file) { 			
let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
 			let data = new java.lang.StringBuilder(); 			
 			let string; 			
 			while((string = readed.readLine()) != null) 				
 			data.append(string + "\n"); 			
 			return data.toString(); 		
 			}, 		
saveTextToFile: function (file, text) { 			
if(!file.exists()) 
file.createNewFile(); 			
let bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length()); 			
for(let i = 0; i < text.length(); i++) 
bytes[i] = text.charCodeAt(i); 			
let stream = new java.io.FileOutputStream(file); 			
try { 				
stream.write(bytes); 			
} 
finally { 				
stream.close(); 			
} 		
} 	
},		

Render: {
			getFloatBuffer: function (fArray) {
				let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
				bBuffer.order(java.nio.ByteOrder.nativeOrder());

				let fBuffer = bBuffer.asFloatBuffer();
				fBuffer.put(fArray);
				fBuffer.position(0);
				return fBuffer;
			},
			getShortBuffer: function (sArray) {
				let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
				bBuffer.order(java.nio.ByteOrder.nativeOrder());

				let sBuffer = bBuffer.asShortBuffer();
				sBuffer.put(sArray);
				sBuffer.position(0);
				return sBuffer;
			},
			renderer: null,
			glSurface: null,
			fov: 90,
			
			color: android.graphics.Color.argb(180, 255, 0, 0),
			
			initted: false,
			init: function () {
				if(Utils.Render.initted)
					return;
				let options = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt")); 


				options = options.split("\n");
				options.forEach(function (entry) {
					let suboption = entry.split(":");
					if(suboption[0] == "gfx_field_of_view") {
						Utils.Render.fov = suboption[1];


					}
				});
				this.renderer = new android.opengl.GLSurfaceView.Renderer({
					onSurfaceCreated: function (gl, config) {
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glClearColor(0, 0, 0, 0);
						gl.glShadeModel(GL10.GL_SMOOTH);
						gl.glClearDepthf(1.0);
						gl.glDisable(GL10.GL_DITHER);
						gl.glEnable(GL10.GL_DEPTH_TEST);
						gl.glDepthFunc(GL10.GL_LEQUAL);
						gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
					},
					onSurfaceChanged: function (gl, width, height) {
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glMatrixMode(GL10.GL_PROJECTION);
						gl.glLoadIdentity();
						android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
						gl.glMatrixMode(GL10.GL_MODELVIEW);
						gl.glLoadIdentity();
					},
					
					
					
					onDrawFrame: function (gl) {
						
						let GL10 = javax.microedition.khronos.opengles.GL10;
						gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
						gl.glLoadIdentity();


						
						if(modules[20]==true || modules[21]==true || modules[22]==true||modules[23]==true) {
							try {
								
								gl.glDisable(GL10.GL_LIGHTING);
								let yaw = getYaw() % 360;
								let pitch = getPitch() % 360;
								let eyeX = getPlayerX();
								let eyeY = getPlayerY() + 1;
								let eyeZ = getPlayerZ();

								let dCenterX = Math.sin(yaw / 180 * Math.PI);
								let dCenterZ = Math.cos(yaw / 180 * Math.PI);
								let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();

								let centerX = eyeX - dCenterX;
								let centerZ = eyeZ + dCenterZ;
								let centerY = eyeY - dCenterY;

								android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
								
								//Hardcoding the esp
								//Skidders, dont do that
								
								let mobs = Entity.getAll();
								let players = Server.getAllPlayers();

								mobs.forEach(function (entry) {

			if(entry != getPlayerEnt()&&Entity.getEntityTypeId(entry) != EntityType.PLAYER&&modules[23]==true){
   Utils.Render.drawLine(gl, getPlayerX(),getPlayerY(), getPlayerZ(), Entity.getX(entry), Entity.getY(entry), Entity.getZ(entry));
}
			if(entry != getPlayerEnt()&&Entity.getEntityTypeId(entry) != EntityType.PLAYER&&modules[22]==true) {
										Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 1, 1);
									}	
									
								});
								
								players.forEach(function (entry) {
									if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER && modules[20]==true) {
										Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);
									}
if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER && modules[21]==true) {
Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry), Entity.getZ(entry));
}
});
} catch(e) {
clientMessage("RenderProblem: " + e);
}
} else {
}
}
});
				ctx.runOnUiThread(new java.lang.Runnable({
					run: function () {
						Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
						Utils.Render.glSurface.setZOrderOnTop(true);


						Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
						Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
						Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
						

						ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);

						Utils.Render.initted = true;
					}
				}));

			},
			
			drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
				
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(xsize, ysize, zsize);
				let vertices = [
					0, 0, 0,
					size[0], 0, 0,
					0, 0, size[2],
					size[0], 0, size[2],

					0, size[1], 0,
					size[0], size[1], 0,
					0, size[1], size[2],
					size[0], size[1], size[2]
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let lineIndices = [
					0, 1,
					0, 2,
					0, 4,

					3, 1,
					3, 2,
					3, 7,

					5, 4,
					5, 7,
					5, 1,

					6, 4,
					6, 7,
					6, 2
				];
				let polyIndices = [
					0, 1, 4,
					1, 4, 5,

					2, 3, 6,
					7, 6, 3,

					1, 3, 7,
					7, 1, 5,

					0, 2, 6,
					6, 0, 4,

					0, 1, 2,
					3, 1, 2,

					4, 5, 6,
					7, 5, 6
				];
				let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
				let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
				gl.glTranslatef(x, y, z);
				gl.glFrontFace(GL10.GL_CCW);
				gl.glEnable(GL10.GL_BLEND);
				//gl.glEnable(GL10.GL_LINE_SMOOTH);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(7);
				if(modules[24]==true){
gl.glColor4f(espR/255, espG/255, espB/255, 0.38)	
}else{
	
	gl.glColor4f(255, 1, 1, 0.38);
	}
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				
				
				gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
				gl.glTranslatef(-x, -y, -z);
			},
			drawLine: function (gl, x, y, z, x2, y2, z2) {
				
				let GL10 = javax.microedition.khronos.opengles.GL10;
				let size = new Array(x2, y2, z2);
				let vertices = [
					0, 0, 0,
					x2 - x, y2 - y, z2 - z
				];
				let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
				let indices = [
					0, 1
				];
				let indexBuffer = Utils.Render.getShortBuffer(indices);
				gl.glTranslatef(x, y, z);
				gl.glEnable(GL10.GL_BLEND);
				gl.glDepthMask(false);
				gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
				gl.glLineWidth(4);
				//gl.glColor4f(android.graphics.Color.(Utils.Render.color) / 255,android.graphics.Color.green(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) /255, 0.7);
gl.glColor4f(0.0, 1.0, 0.0, 0.4);
				gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
				gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
				gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
				gl.glTranslatef(-x, -y, -z);
				gl.glDepthMask(true);
				gl.glDisable(GL10.GL_LINE_SMOOTH);
			}
		},
        
onRender: function (gl) {
		if(!this.state)
			return
		var all = Utils.Entity.getAll();
		var players = Server.getAllPlayers();
		var px = getPlayerX();
		var py = getPlayerY();
		var pz = getPlayerZ();
		all.forEach(function(entry){
			var x = Entity.getX(entry) - px;
			var y = Entity.getY(entry) - py;
			var z = Entity.getZ(entry) - pz;

			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			
			if(dist <= 200 && dist > 0.1)
				Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
		});
		players.forEach(function(entry){
			var x = Entity.getX(entry) - px;
			var y = Entity.getY(entry) - py;
			var z = Entity.getZ(entry) - pz;

			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			
			if(dist <= 200 && dist > 0.1)
				Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
		});
	},
	Player: {
		isOnLadder: function(){
		if(Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ())))return true;
		return false;
		},
            onGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
		isOnGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
		isCollidedHorizontally: function() {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while (x < 1) x += 1;
			while (z < 1) z += 1;
			while (x > 1) x -= 1;
			while (z > 1) z -= 1;

			if(Math.round(x * 100) == 31) x -= 0.01;
			if(Math.round(z * 100) == 31) z -= 0.01;
			if(Math.round(x * 100) == 69) x += 0.01;
			if(Math.round(z * 100) == 69) z += 0.01;
			if(Math.round(x * 100) == 30) blockX--;
			if(Math.round(z * 100) == 30) blockZ--;
			if(Math.round(x * 100) == 70) blockX++;
			if(Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;

			if(Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;

			if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
}
};
Utils.Render.init();
var dy = 0;

var moving = false;

var mPosX = 0;

var mPosY = 0;

var dirk = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/Possible/";
java.io.File(dirk).mkdirs();

function DownloadFile(fileName,filePath,fileUri){
try{
var path_F=android.os.Environment.getExternalStorageDirectory().getPath()+filePath;
java.io.File(path_F).mkdirs();
var downloadID;
var path_D = filePath;
var newFile23 = fileName;
var newFile231=new java.io.File(path_F, newFile23);
var pth=android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var DownloadManager = android.app.DownloadManager;
var Uri = android.net.Uri;
if(!newFile231.exists()){
var request=new DownloadManager.Request(Uri.parse(fileUri));


request.setTitle("Download"); request.setDescription("Downloading file");
  request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE); request.setDestinationInExternalPublicDir(path_D, newFile23);
  request.setAllowedOverMetered(true);
  request.setAllowedOverRoaming(true);
downloadManager1 = ctx.getSystemService(ctx.DOWNLOAD_SERVICE);
downloadID = downloadManager1.enqueue(request);
}
}catch(e){
print(e)
}
}
var time3 = 0;
function Nuker(){
time3++;
if(time3>=1){
time3=0;
for(var xx=getPlayerX()-2;xx<=getPlayerX()+2;xx++){for(var zz=getPlayerZ()-2;zz<=getPlayerZ()+2;zz++){for(var yy=getPlayerY()-2;yy<=getPlayerY()+2;yy++){
Level.destroyBlock(xx,yy,zz)
}}}}};

function crosshairAimAt(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }
  
  var previousVisualRoadPart=[]; 
var visualRoadTimer=0; 
function visualRoad() 
{ 
visualRoadTimer++; 
if(visualRoadTimer>=5) 
{ 
visualRoadTimer=0; 
var x=Math.floor(getPlayerX()); 
var y=Math.floor(getPlayerY()); 
var z=Math.floor(getPlayerZ()); 
for(var i=0;i<previousVisualRoadPart.length;i++) 
{ 
Level.setTile(previousVisualRoadPart[i][0],previousVisualRoadPart[i][1],previousVisualRoadPart[i][2],0); 
} 
previousVisualRoadPart=[]; 
for(var xx=x-1;xx<=x+1;xx++) 
{ 
for(var zz=z-1;zz<=z+1;zz++) 
{ 
if(Level.getTile(xx,y-2,zz)==0) 
{ 
Level.setTile(xx,y-2,zz,20); 
previousVisualRoadPart.push([xx,y-2,zz]); 
} 
} 
} 
} 
} 
  
function toDirectionalVector(vector, yaw, pitch) {
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var playerDir = [0, 0, 0];
function jetpackTick() {
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    var player = getPlayerEnt();
    setVelX(player, playerFlySpeed * playerDir[0]);
    setVelY(player, playerFlySpeed * playerDir[1]);
    setVelZ(player, playerFlySpeed * playerDir[2]);
}

function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				} 
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}



var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
function playMusic(path){
   var mPlayer= new android.media.MediaPlayer();
    
var peths = sdcard+path; 
mPlayer.setDataSource(peths);
mPlayer.prepare();
mPlayer.start();    
}


var FOS = java.io.FileOutputStream;
var FileOutputStream = java.io.FileOutputStream;
//var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();

function loadUri(uri)
    {
    ctx.runOnUiThread(new java.lang.Runnable({run: function(){
    var webs = new android.webkit.WebView(ctx);
    var webset = webs.getSettings();
    webset.setJavaScriptEnabled(true);
    webs.setWebChromeClient(new android.webkit.WebChromeClient());
    webs.setWebViewClient(new android.webkit.WebViewClient());
    webs.loadUrl(uri); 
    new android.app.AlertDialog.Builder(ctx).setView(webs).show();
    }}));
    }
function o(text, showPrefix){
try {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({
   run: function () {
    var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
    var layout = new android.widget.LinearLayout(ctx);
    var msg = new android.widget.TextView(ctx);
    if(showPrefix == null) { 
                text = "Possible: " + text;
    } else { 
                text = showPrefix + ": " + text;
                }
    msg.setText(text);
    msg.setGravity(android.view.Gravity.CENTER);
    msg.setTextSize(15);
    msg.setPadding(10, 10, 10, 10);
     msg.setTextColor(android.graphics.Color.parseColor('#878787'));;
    
    var btnpic = new android.graphics.drawable.GradientDrawable();
    btnpic.setColor(android.graphics.Color.parseColor('#000000'));
    btnpic.setStroke(5, android.graphics.Color.parseColor('#Ab22A6'));
     btnpic.setCornerRadius(100);
    layout.addView(msg);
    layout.setBackground(btnpic);
    layout.getBackground().setAlpha(150);
    thetoast.setView(layout);
    thetoast.show();
    
   }
  }));
 }catch(e){
  print(e);
 }
}

var optionsmcpe = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt");  

var MCPE = { 
read: function(){ 
var buff = new java.io.BufferedReader(new java.io.FileReader(optionsmcpe)); 
var result = ""; 
var str; 
while((str = buff.readLine()) != null) 
result += str + "\n"; 
return result; 
}, 

get: function(name){ 
var result = null; 
try{ 
var br = new java.io.BufferedReader(new java.io.FileReader(optionsmcpe)); 
var str; 
while((str = br.readLine()) != null){ 
if(str.split(":")[0] == name) 
result = str.split(":")[1]; 
} 
}catch(e){ 
print(e + " #" + e.lineNumber); 
} 
return result; 
}, 
set: function(name, value){ 
try{ 
var text = this.read(); 
text = text.replace(this.get(name), value); 
new java.io.FileOutputStream(optionsmcpe).write(new java.lang.String(text).getBytes()); 
}catch(e){ 
print(e + " #" + e.lineNumber); 
}}
};





var File = java.io.File;
var BufferedReader = java.io.BufferedReader;
var FileReader = java.io.FileReader; 
var StringBuilder = java.lang.StringBuilder; 
var FOS = java.io.FileOutputStream; 
var hitxxx = 4;
var hitTimer = hitxxx;
var disTance = 7;
var killX = 7;
var killY = 7;
var killaura = {
optionsFolder:new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"),
editFiles:{
select:function(dir, fileName)
{
return (new File(dir, fileName));
},
exists:function(selectedFile)
{
return selectedFile.exists();
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
write:function(selectedFile, text)
{
editFiles.rewrite(selectedFile, (new editFiles.read(selectedFile)) + text);
},
rewrite:function(selectedFile, text)
{
var writeFOS = new FOS(selectedFile);
writeFOS.write(new java.lang.String(text).getBytes());
}},
remakeOptions:function(){
var path1 = android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe";
if(killaura.optionsFolder.exists()){
var path2 = killaura.editFiles.select(path1, 'options.txt');
var read = killaura.editFiles.read(path2).replace('keyboard_type_0_key.attack:-99', 'keyboard_type_0_key.attack:116').replace('keyboard_type_0_key.togglePerspective:116', 'keyboard_type_0_key.togglePerspective:117').replace('keyboard_type_1_key.togglePerspective:116', 'keyboard_type_1_key.togglePerspective:117').replace('keyboard_type_1_key.attack:81', 'keyboard_type_0_key.attack:116');
killaura.editFiles.rewrite(path2, read);
}},
setHit:function(){
let t = new Thread(new Runnable({
				run: function () {
            try {
                let inst = new android.app.Instrumentation;
                inst.sendKeyDownUpSync(135);
            } catch (e) {
                print("Exception when sendKeyDownUpSync", e.toString()+"#На строке" +e.lineNumber);
            }
        }
			}));
			t.start();
},
killauraON:function(){
var ent = getNearestEntity(disTance);
if(ent!= getPlayerEnt()){
hitTimer--;
 if(hitTimer<=0&&ent){
 Entity.setCollisionSize(ent, killX, killY);
 killaura.setHit();
 hitTimer=hitxxx;
 }}
},
killauraOFF:function (){
Entity.setCollisionSize(getNearestEntity(disTance), 1, 2);
}}
killaura.remakeOptions();

var red = 255;
var green = 0;
var blue = 0;

  var rgbspeed = 12;
  var rgbtick = 0;

var RGB = false;

  var espRed = 0.129;
  var espGreen = 0.078;
  var espBlue = 1;

var timer = 80;
var mot = true;

var bg_0 = new android.graphics.drawable.GradientDrawable();
bg_0.setColor(android.graphics.Color.parseColor('#000000'));
bg_0.setCornerRadius(100);
var bg_01 = new android.graphics.drawable.GradientDrawable();
bg_01.setColor(android.graphics.Color.parseColor('#000000'));
bg_01.setCornerRadius(100);
var bg_1 = new android.graphics.drawable.GradientDrawable();
bg_1.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
bg_1.setColor(android.graphics.Color.parseColor('#000000'));
bg_1.setCornerRadius(1);
var bg_2 = new android.graphics.drawable.GradientDrawable();
bg_2.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
bg_2.setColor(android.graphics.Color.parseColor('#ff82fa'));
bg_2.setCornerRadius(1);
var bg_s = new android.graphics.drawable.GradientDrawable();
bg_s.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
bg_s.setColor(android.graphics.Color.parseColor('#ff82fa'));
bg_s.setCornerRadius(1);
var bg_3 = new android.graphics.drawable.GradientDrawable();
bg_3.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
bg_3.setColor(android.graphics.Color.parseColor('#000000'));
bg_3.setCornerRadius(1);
var bg_d = new android.graphics.drawable.GradientDrawable();
bg_d.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
bg_d.setColor(android.graphics.Color.parseColor('#000000'));
bg_d.setCornerRadius(30);
var bgb = new android.graphics.drawable.GradientDrawable();
bgb.setColor(android.graphics.Color.parseColor('#Ab22A6'));
bgb.setCornerRadius(1);
var GUI;
var modules = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var modulesn = ["HitBox","AimBot","BowAim","SurvivalFly","JetPack","Glide","RandomAura","HitAim","BounceFly","SpeedHack","Tower","QuickTower","TapTp","FastBreak","LongJump","AntiGravity","Vis.Road","Nuker","FullBright","AutoSword","PlayerEsp","PlayerTracer","MobEsp","MobTracer","RainbowEsp","FastFall","HitBoost","Jesus","TpAura","Critical","NoVelocity","SafeWalk","KillAura"];
var binds = ['hb','ab','ba','sf','jp','g','ra','ha','bf','sh','t','qt','tt','fb','lj','ag','vr','n','fb','as','pe','pt','me','mt','re','ff','hb','j','ta','c','nv','sw','k']
var bindss = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
	function textbtn(sizet,textk,laylldkd){
	var button57 = new android.widget.Button(ctx);
 button57.setGravity(android.view.Gravity.LEFT);   button57.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    button57.setBackground(bg_1); 
    button57.setTextSize(sizet);
     button57.setText(textk);         
    button57.setTypeface(fontM);  
    laylldkd.addView(button57);
    }
	
	function textbtno(sizt,txtk,ylldkd){
	var butto57 = new android.widget.Button(ctx);
 butto57.setGravity(android.view.Gravity.CENTER);   butto57.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    butto57.setBackground(bg_1);
    butto57.setTextSize(sizt);
     butto57.setText(txtk);         
    butto57.setTypeface(fontM);  
    ylldkd.addView(butto57);
    }
	
	var seart = 12;
	var edf = 7;
	var sht = 13;
	var fontM; 
	var FUG;
function UPDmenu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
        try{
        	var lay = new LinearLayout(ctx);
  lay.setOrientation(1);
  var layr = new LinearLayout(ctx);
  layr.setOrientation(1);
  var grd = new android.widget.GridLayout(MainActivity);
grd.setColumnCount(2); 
var menuScroll1 = new ScrollView(ctx);
var menuScroll2 = new ScrollView(ctx);
menuScroll1.addView(layr);
menuScroll2.addView(grd);
lay.addView(menuScroll1);
lay.addView(menuScroll2);
  var butto570 = new android.widget.Button(ctx);
 butto570.setGravity(android.view.Gravity.CENTER);   butto570.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    butto570.setBackground(bg_2);
    butto570.setTextSize(15);
     butto570.setText("Update List");         
    layr.addView(butto570);
    var button517 = new android.widget.Button(ctx);
 button517.setGravity(android.view.Gravity.LEFT);   button517.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    button517.setBackground(bg_3);
    button517.setTextSize(10);
     button517.setText("updates in version 3:\n1)ArrayList fix\n2)New search functions\n3)New menuBtn moving\n4)long click on the settings button you can move the menu\n5)added binds(long click on the function)\n5)bug fix");         
    layr.addView(button517);
  var utto57 = new android.widget.Button(ctx);
 utto57.setGravity(android.view.Gravity.LEFT);   utto57.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    utto57.setBackground(bg_1);
    utto57.setTextSize(7);
     utto57.setText("нажав на кнопку <ок> вы подтверждаете,что согласны с тем,что на ваше устройство будут скачаны дополнительные файлы для работы программы,если же вы не согласны с этим условием, нажмите кнопку <отмена>");         
    layr.addView(utto57);
  var buttn57 = new android.widget.Button(ctx);
 buttn57.setGravity(android.view.Gravity.CENTER);   buttn57.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    buttn57.setBackground(bg_2);
    buttn57.setTextSize(10);
    
     buttn57.setText("отмена");       
    buttn57.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/6, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    

buttn57.setOnClickListener(new View.OnClickListener({
                onClick: function(view){
               FUG.dismiss(); 	
}                	
}));
grd.addView(buttn57);
var butt57 = new android.widget.Button(ctx);
 butt57.setGravity(android.view.Gravity.CENTER);   butt57.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    butt57.setBackground(bg_2);
    butt57.setTextSize(10);
    
     butt57.setText("ok");       
    butt57.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/6, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    

butt57.setOnClickListener(new View.OnClickListener({
                onClick: function(view){
                try{	
var wwww = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
if(wwww.getNetworkInfo(android.net.ConnectivityManager.TYPE_WIFI).isConnected()==true){ 	
               o("пожалуйста подождите");
             DownloadFile("font.ttf","/games/com.mojang/Possible/","https://drive.google.com/uc?export=download&id=1-Ur0yhslY3vUbWytHKEFm6ihCmrTpoGn");
DownloadFile("click.mp3","/games/com.mojang/Possible/","https://drive.google.com/uc?export=download&id=1-WANCa3p0u_RYPL9SQk-FBAf8VYI2GIw");
java.lang.Thread.sleep(5000);   
	o("хорошей игры");
	fontM = new android.graphics.Typeface.createFromFile(new android.os.Environment.getExternalStorageDirectory()+"/games/com.mojang/Possible/font.ttf");
	menu();
	RGB = true;
	FUG.dismiss();
}else{o("включите wifi чтобы скачать файл")}
}catch(e){print(e)}
}
}));
grd.addView(butt57);
  
  FUG = new PopupWindow(lay, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, RelativeLayout.LayoutParams.WRAP_CONTENT);
            FUG.setBackgroundDrawable(bg_3); 
            FUG.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}

var IngeniousMoving = false;
var ingeniousBTNX = null;
var ingeniousBTNY = null;
var dp = ctx.getResources().getDisplayMetrics().density * 1
var INGENIOUSbuttonX=5*dp, INGENIOUSbuttonY=5*dp;
function menu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
        try{
        	var lay = new android.widget.FrameLayout(ctx);
  
  var tap = 0;
var LayoutParams = android.widget.LinearLayout.LayoutParams 
   
butt57o = new android.widget.Button(ctx);
butt57o.setBackground(bg_01);
     butt57o.setText("");     
     
  butt57o.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/15.5, ctx.getWindowManager().getDefaultDisplay().getWidth()/15.5));
lay.addView(butt57o);
				
   button57h = new android.widget.Button(ctx);
 button57h.setGravity(android.view.Gravity.CENTER);   button57h.setTextColor(android.graphics.Color.parseColor('#878787'));
    button57h.setBackground(bg_0);
    button57h.setTextSize(10);
    button57h.setText("P");     
      
    button57h.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/16, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button57h.setTypeface(fontM);  

button57h.setOnClickListener(new View.OnClickListener({
                onClick: function(view){

                	try{
          if(tap<2){
    tap += 1;
    switch (tap){
    case 1:
    Menus();
    
   playMusic("/games/com.mojang/Possible/click.mp3")   
    break;
    case 2:
    
    GUY.dismiss();
   playMusic("/games/com.mojang/Possible/click.mp3")   
    tap = 0; }
    }          

    

}catch(err){
print("ошибка: " + err + err.lineNumber);}
}
}));         
button57h.setOnLongClickListener(function(v,t) {
					IngeniousMoving=true;
					ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
					return true;
				});
				
				button57h.setOnTouchListener(function(v, e) {
					if(!IngeniousMoving) {
						ingeniousBTNX=e.getX();
						ingeniousBTNY=e.getY();
					}
						var action = e.getAction() 
						if(action==2&&IngeniousMoving) {
							var XC=parseInt(e.getX()-ingeniousBTNX)*-1/10;
							var YC=parseInt(e.getY()-ingeniousBTNY)*-1/10;
							INGENIOUSbuttonX += XC;
							INGENIOUSbuttonY += YC;
							GUI.update(parseInt(INGENIOUSbuttonX), parseInt(INGENIOUSbuttonY), -1, -1);
						}
if(action==1)IngeniousMoving=false;
					return false;
				});
lay.addView(button57h);
    
 GUI = new PopupWindow(lay, ctx.getWindowManager().getDefaultDisplay().getWidth()/15.5, ctx.getWindowManager().getDefaultDisplay().getWidth()/15.5);
            GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)); 
            GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}
var tapa = 0;
var GUY;
function Menus(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = android.widget.LinearLayout.LayoutParams 
   
  var lay = new LinearLayout(ctx);
  lay.setOrientation(0);
  var lays = new LinearLayout(ctx);
  lays.setOrientation(1);
  var grid = new android.widget.GridLayout(MainActivity);
grid.setColumnCount(2); 
var bg101 = new android.graphics.drawable.GradientDrawable();
    bg101.setColor(android.graphics.Color.parseColor('#000000'));
    bg101.setStroke(2, android.graphics.Color.parseColor('#Ab22A6'));
    
grid.setBackgroundDrawable(bg101); 
  
var menuScroll1 = new ScrollView(ctx);
var menuScroll2 = new ScrollView(ctx);
var moving4 = false;
				var dx4 = 0;
				var dy4 = 0;
				var mPosX4 = 0;
				var mPosY4 = 0;
				var touchListen = new View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							
							if(!moving4) return false;
							switch(motionEvent.getAction()) {
							case MotionEvent.ACTION_DOWN:
								dx4 = mPosX4 - motionEvent.getRawX();
								dy4 = mPosY4 - motionEvent.getRawY();
								break;
							case MotionEvent.ACTION_MOVE:
								mPosX4 = (motionEvent.getRawX() + dx4);
								mPosY4 = (motionEvent.getRawY() + dy4);
								GUY.update(mPosX4, mPosY4, -1, -1);
								break;
							case MotionEvent.ACTION_UP:
							case MotionEvent.ACTION_CANCEL:
								moving4 = false;
								break;
							}
							
						}catch(e){print(e+". #"+e.lineNumber)}
						return true;
					}
				});
				var longListen = new View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving4 = true;
						return true;
					}
				});
menuScroll1.addView(lay);
menuScroll2.addView(grid);
lays.addView(menuScroll1);
lays.addView(menuScroll2);
var bg100 = new android.graphics.drawable.GradientDrawable();
bg100.setColor(Color.parseColor("#ab22a6"));
lay.setBackgroundDrawable(bg100); 
var search = new android.widget.EditText(ctx);
search.setImeOptions(android.view.inputmethod.EditorInfo.IME_FLAG_NO_EXTRACT_UI);
search.setHint("Search a mod  🔎"); search.setTextColor(android.graphics.Color.parseColor('#573455'));         search.setMaxLines(1);  
  search.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/3.8, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
  search.setInputType(1);   
search.setTypeface(fontM);
search.setBackground(bg_s);
search.setTextSize(seart);   search.setTextColor(android.graphics.Color.WHITE);
search.setGravity(android.view.Gravity.CENTER);
search.setFocusable(true);
search.addTextChangedListener(new android.text.TextWatcher({
     afterTextChanged: function (text) {
  {
  	
 if(text == null){
 grid.removeAllViews();
 generateButton() 
 }else{
grid.removeAllViews();
 generateButton(text)
 }
           
    }
    }
    }));
lay.addView(search);  
search.setOnClickListener(new View.OnClickListener({onClick: function(viewarg) {
	openEdit(search);
	}}));
var button501 = new android.widget.Button(ctx);
 button501.setGravity(android.view.Gravity.CENTER);   button501.setTextColor(android.graphics.Color.parseColor('#573455'));
    button501.setBackground(bg_3);
    button501.setTextSize(sht);
    button501.setOnTouchListener(touchListen);
	button501.setOnLongClickListener(longListen);
    button501.setText('⚙️');
    button501.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/16, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button501.setTypeface(fontM);  
    button501.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg) {
try{
            if(tapa<2){
    tapa += 1;
    switch (tapa){
    case 1:
    settings();
    
   playMusic("/games/com.mojang/Possible/click.mp3")   
    break;
    case 2:
    
    SUI.dismiss();
   playMusic("/games/com.mojang/Possible/click.mp3")   
    tapa = 0; }
    }          

    }catch(e){print(e+". #"+e.lineNumber)}
    }
    }));
    lay.addView(button501);

function generateButton(s){
for(var i = 0; i<modulesn.length; i++){
var button5 = new android.widget.Button(ctx);
 button5.setGravity(android.view.Gravity.CENTER);   button5.setTextColor(android.graphics.Color.parseColor('#878787'));
    button5.setBackground(bg_1);
    button5.setTextSize(edf);
    if(modules[i]==true){
    button5.setText(modulesn[i]+" on");
    }else{
     button5.setText(modulesn[i]+" off");   
    }
    button5.setId(i);
    button5.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/6, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button5.setTypeface(fontM);  
    button5.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg) {
try{        
if(!modules[viewarg.getId()]){
modules[viewarg.getId()] = true;
if(CFG==null&&splist==true){
	arraylist()
	}else if(CFG!=null&&splist==true){
		CFG.dismiss();
		arraylist()
		}
 playMusic("/games/com.mojang/Possible/click.mp3")   
 o(modulesn[viewarg.getId()]+" on")
viewarg.setText(modulesn[viewarg.getId()]+" : on");
                } else {
modules[viewarg.getId()] = false;
if(CFG==null&&splist==true){
	arraylist()
	}else if(CFG!=null&&splist==true){
		CFG.dismiss();
		arraylist()
		}
playMusic("/games/com.mojang/Possible/click.mp3")   
o(modulesn[viewarg.getId()]+" off")
viewarg.setText(modulesn[viewarg.getId()]+" off");   
 } 
 }catch(e){
 print(e+". #"+e.lineNumber)
 }
  }
   }));
button5.setOnLongClickListener(function(v,t) {
	try{
					ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
if(bindss[v.getId()]==true){
bindss[v.getId()]=false;
eval("bind_"+modulesn[v.getId()]+".dismiss()");
o(modulesn[v.getId()]+" bind off")
}else{
bindss[v.getId()]=true;
createbind(v.getId())
o(modulesn[v.getId()]+" bind on")
}
}catch(e){print(e+". #"+e.lineNumber)}
return true;
				});
if(!s){
grid.addView(button5);
    }else{
 if(modulesn[i].toLowerCase().indexOf(s)!=-1){
grid.addView(button5);
}
} 
}}
  generateButton();
var bg100 = new android.graphics.drawable.GradientDrawable();
    bg100.setColor(android.graphics.Color.BLACK);
    bg100.setStroke(10, android.graphics.Color.parseColor('#Ab22A6'));
    
lays.setBackgroundDrawable(bg100); 
  lays.setPadding(10, 10, 10, 10);
GUY = new android.widget.PopupWindow(lays, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/1.8);          GUY.setBackgroundDrawable(bg_3); 
            GUY.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}
function createbind(idmode){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = LinearLayout.LayoutParams 
   var lays = new LinearLayout(ctx);
  lays.setOrientation(1);
var moving4 = false;
				var dx4 = 0;
				var dy4 = 0;
				var mPosX4 = 0;
				var mPosY4 = 0;
				var touchListen = new View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving4) return false;
							switch(motionEvent.getAction()) {
							case MotionEvent.ACTION_DOWN:
								dx4 = mPosX4 - motionEvent.getRawX();
								dy4 = mPosY4 - motionEvent.getRawY();
								break;
							case MotionEvent.ACTION_MOVE:
								mPosX4 = (motionEvent.getRawX() + dx4);
								mPosY4 = (motionEvent.getRawY() + dy4);
								eval("bind_"+modulesn[idmode]+".update(mPosX4, mPosY4, -1, -1);");
								break;
							case MotionEvent.ACTION_UP:
							case MotionEvent.ACTION_CANCEL:
								moving4 = false;
								break;
							}
							
						} catch(e) {
							print("Error: " + e);
						}
						return true;
					}
				});
var longListen = new View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving4 = true;
						return true;
					}
				});
var textsettings = new Button(ctx);
textsettings.setText(binds[idmode]);
textsettings.setTextSize(8);      
textsettings.setTypeface(fontM);  
textsettings.setBackground(bg_d);
textsettings.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/16, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
textsettings.setTextColor(Color.parseColor('#878787'));
textsettings.setOnTouchListener(touchListen);
textsettings.setOnLongClickListener(longListen);
textsettings.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
if(modules[idmode]==true){
playMusic("/games/com.mojang/Possible/click.mp3")   
modules[idmode]=false;
o(modulesn[idmode]+" off")
viewarg.setTextColor(Color.parseColor('#878787'));
if(CFG==null&&splist==true){
	arraylist()
	}else if(CFG!=null&&splist==true){
		CFG.dismiss();
		arraylist()
		}
}else{
playMusic("/games/com.mojang/Possible/click.mp3")   
modules[idmode]=true;
o(modulesn[idmode]+" on")
viewarg.setTextColor(Color.parseColor('#ffffff'));
if(CFG==null&&splist==true){
	arraylist()
	}else if(CFG!=null&&splist==true){
		CFG.dismiss();
		arraylist()
		}
}
}      
}));
lays.addView(textsettings);

eval("bind_"+modulesn[idmode]+" = new PopupWindow(lays, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);");
eval("bind_"+modulesn[idmode]+".showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);");
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}
function openEdit(searchbtn) {
ctx.runOnUiThread(new Runnable({
run: function() {
try {
temped=new android.widget.EditText(ctx);
searchbtn.setText('');
temped.setTextSize(7);
temped.setTextColor(Color.WHITE);				
temped.setHintTextColor(Color.parseColor("#b7b7b7"));
temped.setOnKeyListener(new android.view.View.OnKeyListener() {
        onKey: function(v,keyCode,event) {
            if ((event.getAction() == 	android.view.KeyEvent.ACTION_DOWN) && (keyCode == 	android.view.KeyEvent.KEYCODE_ENTER)) {
                editp.dismiss();
                return true;
            }
            return false;
        }
    });
temped.addTextChangedListener(new android.text.TextWatcher() {
	afterTextChanged: function(text) {
		try{
			searchbtn.setText(text.toString());
		}catch(e){clientMessage(e)}
	}
});
editp = new PopupWindow(temped, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT,true);
editp.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
editp.setWidth(2);
editp.setHeight(2);
editp.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0,0);
new android.os.Handler().postDelayed(new java.lang.Runnable({
	run: function() {
		temped.dispatchTouchEvent(MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), MotionEvent.ACTION_DOWN , 0, 0, 0));
		temped.dispatchTouchEvent(MotionEvent.obtain(android.os.SystemClock.uptimeMillis(), android.os.SystemClock.uptimeMillis(), MotionEvent.ACTION_UP , 0, 0, 0));
	}
}), 200);
} catch (e) {clientMessage(e) } } })); };
var splist = false;
var tapl = 0;
var BounceFlyTimer = 5;
var SUI;
function settings(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = android.widget.LinearLayout.LayoutParams 
 var lays = new LinearLayout(ctx);
lays.setOrientation(1);
 var lay = new LinearLayout(ctx);
  var menuScroll = new ScrollView(ctx);
    lay.setOrientation(1);
menuScroll.addView(lay);

  
  var scrollText = new android.widget.TextView(ctx);
scrollText.setText(" settings                     vk group https://vk.com/toolchestformcpe ");
scrollText.setTextSize(18);      
scrollText.setGravity(Gravity.CENTER);
scrollText.setTypeface(fontM);  
scrollText.setTextColor(android.graphics.Color.parseColor('#573455'));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);         
        scrollText.setOnClickListener(new View.OnClickListener({
                onClick: function(view){
                	loadUri("https://vk.com/idkomandavk")
        	}
}));
lay.addView(scrollText);
  
  
  
  textbtno(15,'text size',lay);
  textbtn(10,"  search text",lay);
 


    var sbp = new android.widget.SeekBar(ctx);
    sbp.setMax(60);
    sbp.setProgressTintList(ColorStateList.valueOf(android.graphics.Color.parseColor('#ab22A6')));
    sbp.setProgress(seart);
    sbp.setBackground(bg_1);
    sbp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
    sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
    {
    onStopTrackingTouch: function(view)
    {
    seart=sbp.getProgress();
     o(seart);
    }
    });
    lay.addView(sbp);
textbtn(10,"  cheats text",lay);
var sbp1 = new android.widget.SeekBar(ctx);
    sbp1.setMax(60);
    sbp1.setProgressTintList(ColorStateList.valueOf(android.graphics.Color.parseColor('#ab22A6')));
    sbp1.setProgress(edf);
    sbp1.setBackground(bg_1);
    sbp1.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
    {
    onStopTrackingTouch: function(view)
    {
    edf=sbp1.getProgress();
     o(edf);
    }
    });
    lay.addView(sbp1);
 
 textbtn(10,"  settings text",lay);
 
 var sbp3 = new android.widget.SeekBar(ctx);
    sbp3.setMax(60);
    sbp3.setProgressTintList(ColorStateList.valueOf(android.graphics.Color.parseColor('#ab22A6')));
    sbp3.setProgress(sht);
   sbp3.setBackground(bg_1);
    sbp3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
    {
    onStopTrackingTouch: function(view)
    {
    sht=sbp3.getProgress();
     o(sht);
    }
    });
    lay.addView(sbp3);
 
 var utton155 = new android.widget.Button(ctx);
 utton155.setGravity(android.view.Gravity.CENTER);   utton155.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    utton155.setBackground(bg_1);
    utton155.setTextSize(10);
    utton155.setText('standart settings');
    
    utton155.setTypeface(fontM);  
    utton155.setOnClickListener(new android.view.View.OnClickListener({ onClick: function(viewarg) {
    seart = 12;
	edf = 7;
	sht = 13;
	o("закройте меню чтобы изменился размер текстов.")
    }
    }));
    lay.addView(utton155);
 
 var butt57s = new android.widget.Button(ctx);
 butt57s.setGravity(android.view.Gravity.CENTER);   butt57s.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
    butt57s.setBackground(bg_2);
    butt57s.setTextSize(10);  
     butt57s.setText("arraylist");       
butt57s.setOnClickListener(new View.OnClickListener({
                onClick: function(view){
                	try{
                	if(tapl<2){
    tapl += 1;
    switch (tapl){
    case 1:
    splist=true;
    arraylist();
    o("arraylist on");
   playMusic("/games/com.mojang/Possible/click.mp3")   
    break;
    case 2:
    splist=false;
    CFG.dismiss();
    o("arraylist off");
   playMusic("/games/com.mojang/Possible/click.mp3")   
    tapl = 0; }
    }       }catch(e){print(e+" /"+e.lineNumber)}   
               }
}));
lay.addView(butt57s);
  var bg100 = new android.graphics.drawable.GradientDrawable();
    bg100.setColor(android.graphics.Color.parseColor('#000000'));
    bg100.setStroke(10, android.graphics.Color.parseColor('#Ab22A6'));
    
lays.setBackgroundDrawable(bg100); 

  lays.setPadding(10, 10, 10, 10);
  lays.addView(menuScroll);  

SUI = new android.widget.PopupWindow(lays, ctx.getWindowManager().getDefaultDisplay().getWidth()/5, RelativeLayout.LayoutParams.WRAP_CONTENT);       
   SUI.setBackgroundDrawable(bg_1);  
   SUI.setAnimationStyle(android.R.style.Animation_Dialog);
   
            SUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}

var linevbg = new android.graphics.drawable.GradientDrawable();
    linevbg.setColor(android.graphics.Color.parseColor('#991884'));
    linevbg.setCornerRadius(0);
   var ai; var jgh;
var CFG; var VIEWS = [];
function arraylist(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = android.widget.LinearLayout.LayoutParams 
var lays = new LinearLayout(ctx);
  lays.setOrientation(0);
  var lay = new LinearLayout(ctx);
lay.setOrientation(1);
lays.addView(lay);
VIEWS = [];
    for(var i = 0; i<modulesn.length; i++){
    	if(modules[i]==true){
jgh = new android.widget.TextView(ctx);
VIEWS.push(jgh);
jgh.setText(modulesn[i]);
jgh.setTextSize(7);      
jgh.setGravity(Gravity.RIGHT);
jgh.setTypeface(fontM);  
jgh.setTextColor(android.graphics.Color.parseColor('#Ab22A6'));
lay.addView(jgh);
}
  }
ai = new android.widget.TextView(ctx); 
ai.setText(".");
ai.setTextColor(Color.TRANSPARENT); 
ai.setLayoutParams(new LinearLayout.LayoutParams(10, RelativeLayout.LayoutParams.MATCH_PARENT));
ai.setBackground(linevbg); 
ai.setTextSize(15);
lays.addView(ai);
   CFG = new android.widget.PopupWindow(lays, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);          
            CFG.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
            CFG.setTouchModal(true);
            CFG.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT)); 
   }catch(err){
print("An error occured: " + err + err.lineNumber);
        }
    }}));
}
var filey = new java.io.File(sdcard+"/games/com.mojang/Possible/font.ttf");
var filey2 = new java.io.File(sdcard+"/games/com.mojang/Possible/click.mp3");
if(!filey.exists()||!filey2.exists()){
	UPDmenu();
o("первый запуск");

}else{
	o("удачной игры");
	fontM = new android.graphics.Typeface.createFromFile(new android.os.Environment.getExternalStorageDirectory()+"/games/com.mojang/Possible/font.ttf");
	menu();
	RGB = true;
	}
function modTick(){
	if(modules[0]==true){
Entity.setCollisionSize(Player.getPointedEntity(), 25, 10);

}else{
Entity.setCollisionSize(Player.getPointedEntity(), 1, 2); 
}

if(modules[3]==true&&Level.getGameMode()==0){
	Player.setFlying(1);}
			if(modules[3]==false&&Level.getGameMode()==0){
				Player.setFlying(0);
				}
		if(modules[4]==true){
			jetpackTick();
			}
			if(modules[5]==true){
			setVelY(getPlayerEnt(), -0.01);
			}
			if(modules[8]==true){
				BounceFlyTimer--;
if(BounceFlyTimer == 0){
BounceFlyTimer = 5;
setVelY(getPlayerEnt(), +0.18);
}

				}
if(modules[9]==true){
	ModPE.setGameSpeed(100);
	}else{
		ModPE.setGameSpeed(20);
		}
if(modules[13]==true){
	Level.destroyBlock(Player.getPointedBlockX(),Player.getPointedBlockY(),Player.getPointedBlockZ());
	}
	if(modules[14]==true){
	var jump = 2.5;
var yaw1 = Entity.getYaw(getPlayerEnt());
        if (Entity.getVelY(getPlayerEnt()) > 0.32) {
            setVelX(getPlayerEnt(), -jump * Math.sin(yaw1 / 180 * Math.PI));
            if (Entity.getVelY(getPlayerEnt()) > 0.32) {
                setVelZ(getPlayerEnt(), jump * Math.cos(yaw1 / 180 * Math.PI))
            }
        }}
        if(modules[15]==true){
        setVelY(getPlayerEnt(), +0.4);}
        if(modules[16]==true){
visualRoad() 
        	}else{
if(Level.getTile(Player.getX(),Player.getY()-2,Player.getZ())==20){
	setTile(Player.getX(),Player.getY()-2,Player.getZ(),0);
	setTile(Player.getX()+1,Player.getY()-2,Player.getZ(),0);
	setTile(Player.getX()-1,Player.getY()-2,Player.getZ(),0);
	setTile(Player.getX(),Player.getY()-2,Player.getZ()+1,0);
	setTile(Player.getX(),Player.getY()-2,Player.getZ()-1,0);
	setTile(Player.getX()+1,Player.getY()-2,Player.getZ()+1,0);
	setTile(Player.getX()-1,Player.getY()-2,Player.getZ()+1,0);
	setTile(Player.getX()-1,Player.getY()-2,Player.getZ()-1,0);
	setTile(Player.getX()+1,Player.getY()-2,Player.getZ()-1,0);
	}
    }
    if(modules[17]==true){
    Nuker();
    }
    if(modules[18]==true){
Block.setLightLevel(0,15);
}else{
Block.setLightLevel(0,0);
}
if(modules[19]==true){
for(i = 0;i <= 8;i++) {
if(Player.getInventorySlot(i) == 268) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 272) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 283) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 267) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 276) {
Player.setSelectedSlotId(i);
break;
}
}
}
if(modules[24]==true){
	try{
if(rgbticks==0){
if(reds > 0 && blues == 0){
reds=reds-5;
greens=greens+5; 
espR=reds;
espG=greens;
espB=blues;
}
if(greens > 0 && reds == 0){
greens=greens-5;
blues=blues+5;
espR=reds;
espG=greens;
espB=blues;
}
if(blues > 0 && greens == 0){
reds=reds+5;
blues=blues-5;
espR=reds;
espG=greens;
espB=blues;
}
rgbticks=rgbspeeds;
}else{
rgbticks--;
}
}catch(e){print(e+e.lineNumber)}
}
if(modules[25]==true&& Entity.getVelY(Player.getEntity()) < -0.05){
setVelY(Player.getEntity(), -105); 
}
if(modules[27]==true){
if((getTile(getPlayerX(), getPlayerY() - 0.8, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 0.8, getPlayerZ()) <= 11)) {
					setVelY(getPlayerEnt(), 0.2);
				} else if((getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()) <= 11)) {
					setVelY(getPlayerEnt(), 0.05);
				} else if((getTile(getPlayerX(), getPlayerY() - 1.68, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.68, getPlayerZ()) <= 11))
					setVelY(getPlayerEnt(), 0.015);
                  if(Utils.Player.IsInWater){
                      setVelY(getPlayerEnt(), 0.015);
                  }
          }         
          if(modules[30]==true || Entity.getHealth(getPlayerEnt()) <= 0){ 
if(this.tick > 0) tick--; else Entity.setImmobile(getPlayerEnt(), false); 
if(this.lastHealth > Entity.getHealth(getPlayerEnt())){ 
Entity.setImmobile(getPlayerEnt(), true); 
this.attackTick = 1; 
}; 
this.lastHealth = Entity.getHealth(getPlayerEnt()); 
};
if(modules[31]==true){
	Entity.setSneaking(getPlayerEnt(), true);
}else{
Entity.setSneaking(getPlayerEnt(), false);
}
if(modules[32]==true){
killaura.killauraON();
}else{
killaura.killauraOFF();
}}
	function entityHurtHook(attacker, victim, health){ 
 if(modules[30]==true || (victim != getPlayerEnt())){ 
 return; 
 Entity.setImmobile(getPlayerEnt, true); 
 this.attackTick = 1; 
 }; 
}; 
	
	function attackHook(a,v){
	if(modules[6]==true){
  var st = Math.floor((Math.random()*4)+1);
if(st==1){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)+2,Entity.getY(v)+2,Entity.getZ(v));
}
if(st==2){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)-2,Entity.getY(v)+2,Entity.getZ(v));    
}
if(st==3){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+2,Entity.getZ(v)+2);
}
if(st==4){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+2,Entity.getZ(v)-2);    
}  
}
if(modules[7]==true){
	ent = getNearestEntity(8)
							if(ent != null) crosshairAimAt(ent);   
	}
	if(modules[26]==true){
var pitch = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI)/180; 
 var yaw = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI)/180; 
 var X = Math.sin(pitch) * Math.cos(yaw); 
 var Y = Math.cos(pitch); 
 var Z = Math.sin(pitch) * Math.sin(yaw); 
 setVelX(getPlayerEnt(), X * 1.5); 
 setVelY(getPlayerEnt(), Y * 1.5); 
 setVelZ(getPlayerEnt(), Z * 1.5); 
 setPositionRelative(getPlayerEnt(), 0.9, 0.9, -0.9);
} 
    if(modules[28] == true){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+2,Entity.getZ(v));  
}
    if(modules[29]==true){
setVelY(getPlayerEnt(), 0.25);
}
}


function useItem(x,y,z,i,b){
	if(modules[10]==true){
		setVelY(getPlayerEnt(), 0.6)
	}
	if(modules[11]==true){
			Entity.setPositionRelative(getPlayerEnt(), 0, +1.5, 0);
setVelY(getPlayerEnt(), 0.0);
	}
	if(modules[12]==true){
	Entity.setPosition(getPlayerEnt(),x,y+2,z)
	}
	}
	
	

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function rptask() {
 ctx.runOnUiThread(new java.lang.Runnable({
  run: function () {

   new android.os.Handler()
    .postDelayed(new java.lang.Runnable({
     run: function () {

  if(RGB){
   if(rgbtick==0){
if(red > 0 && blue == 0){
   red=red-5;
   green=green+5; 
espRed=red;
espGreen=green;
espBlue=blue;
}
if(green > 0 && red == 0){
   green=green-5;
   blue=blue+5;
espRed=red;
espGreen=green;
espBlue=blue;
}
if(blue > 0 && green == 0){
    red=red+5;
    blue=blue-5;
espRed=red;
espGreen=green;
espBlue=blue;
}

let hexc = rgbToHex(espRed,espGreen,espBlue);
ctx.runOnUiThread(new Runnable({ run: function(){
if(butt57o){
bg_01.setColor(android.graphics.Color.parseColor(hexc));
butt57o.setBackground(bg_01);
}
if(splist==true){
linevbg.setColor(android.graphics.Color.parseColor(hexc));
ai.setBackground(linevbg);
for(var i in VIEWS){
VIEWS[i].setTextColor(android.graphics.Color.parseColor(hexc));
}}
//Можно больше подключить кнопок или текст
}}));
rgbtick=rgbspeed;
}else{
rgbtick--;
 }
if(modules[1]==true){
    var ent = getNearestEntity(8)
							if(ent != null) crosshairAimAt(ent);
}
if(modules[2]==true){
if(Player.getCarriedItem()==261){
  var ent = getNearestEntity(150)
							if(ent != null) crosshairAimAt(ent);  
}
}
}


eval(rptask())
     }
    }), 0)
  }
 }))
}
rptask();

}catch(err){print("An error occured: " + err + err.lineNumber)}