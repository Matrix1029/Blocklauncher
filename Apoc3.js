//CODE by the Flqme team
//GUI by FirePro9978 <3
//GUI STUFF

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;


//UTILITIES

var Utils = {
	        //Utilities from GS029
            Block: {
                 isLiquid: function(id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		         },
		         fastBreak: function() {
			     for(i = 0; i < 256; i++) {
                       Block.setDestroyTime(i, 0);
                      }
			     },
			     fastBreakDefault: function() {
				 for(i = 0; i < 256; i++) {
                      Block.setDestroyTime(i, defDestroyTime[i]);
                     }
				},
		        isLadder: function(id) {
			if(id == 65) return true;
			return false;
		         },
            },
            Velocity: {
			calculateSpeed: function() {
				return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
				}
			},
			Text: {
				replaceAll: function(target, replacement, text) {
                var txt = text;
                return txt.replace(new RegExp(target, 'g'), replacement);
               }
		    },
            Player: {
                isInWater: function() {
			if(Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			   }
		    },
		        isOnLadder: function(){
		    if(Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.001, getPlayerZ()))) {
            return true;
            } else {
		    return false;
		       }
		    },
                isOnGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
            isCollidedHorizontally: function() {
			var x = Entity.getX(getPlayerEnt());
			var z = Entity.getZ(getPlayerEnt());
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while(x < 1) x += 1;
			while(z < 1) z += 1;
			while(x > 1) x -= 1;
			while(z > 1) z -= 1;

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

			if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	}
};

//BACKGROUND STUFF

var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLACK); //ButtonBGColor
bg.setStroke(4, android.graphics.Color.GREEN); //ButtonStroke
bg.setCornerRadius(2); //ButtonCornerRadius

var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.BLACK); //XButtonBGColor
xbg.setStroke(4, android.graphics.Color.RED); //XButtonStroke
xbg.setCornerRadius(2); //XButtonCornerRadius

//MORE GUI + VARIABLES
function newLevel()
{
ModPE.showTipMessage('§aHAVE FUN!!')
}
ModPE.langEdit("menu.copyright","§cApocalypse §aV3");
ModPE.langEdit("menu.play","§aApocalypes");

var GUI;
var menu;
var exitUI;

//YOUR CLIENT INFORMATION

var VERSION = "V3";
var NAME = "Apocalypse";
var DEVELOPERS = "HACKER laastad";
var cBtn = "[AP]"

//MODULE VARIABLES

var aim;
var aimbot = false;
var aimed = false;

var gp
var gps = false;
var gped = false;
var lhtick = 0;

var ride
var rides = false;
var rided = false;

var tests
var testss = false;
var tested = false;

var water
var waters = false;
var watered = false;

var lad
var lads = false;
var laded = false;
var bgtick = 0;

var safe
var safes = false;
var safed = false;

var sword
var swords = false;
var sworded = false;

var potion
var potions = false;
var potioned = false;

var speeds
var speedss = false;
var speeded = false;

var grapples
var grappless = false;
var grappleed = false;

var twerks
var twerkss = false;
var twerked = false;

var bounces
var bouncess = false;
var bounced = false;

var follows
var followss = false;
var followed = false;

var heart
var hearts = false;
var hearted = false;

var xps
var xpss = false;
var xped = false;

var spam
var spams = false;
var spamed = false;

var pam
var pams = false;
var pamed = false;

var underblocks
var underblockss = false;
var underblocked = false;

var view
var views = false;
var viewed = false;

var far
var farbot = false;
var fared = false;

var dodges
var dodgess = false;
var dodged = false;

var jetpacks
var jetpackss = false;
var jetpacked = false;

var ghosts
var ghostss = false;
var ghosted = false;

var taptps
var taptpss = false;
var taptped = false;

var hitjumps
var hitjumpss = false;
var hitjumped = false;

var bowaimbots
var bowaimbotss = false;
var bowaimboted = false;

var stealths
var stealthss = false;
var stealthed = false;

var cspeeds
var cspeedss = false;
var cspeeded = false;

var snipers
var sniperss = false;
var snipered = false;

var reachs
var reachss = false;
var reached = false;

var jumpspeeds
var jumpspeedss = false;
var jumpspeeded = false;

var backfaces
var backfacess = false;
var backfaceed = false;

var ndglides
var ndglidess = false;
var ndglideed = false;

var sglides
var sglidess = false;
var sglideed = false;

var dmgglides
var dmgglidess = false;
var dmgglideed = false;

var autoclimbs
var autoclimbss = false;
var autoclimbed = false;

var fullbrights
var fullbrightss = false;
var fullbrighted = false;

var placetps
var placetpss = false;
var placetped = false;

var leetspeaks
var leetspeakss = false;
var leetspeaked = false;

function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
//Button
function showMenuBtn() {
	
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuBtn = new Button(ctx);
		menuBtn.setText(cBtn);
		menuBtn.setTextColor(android.graphics.Color.RED);
		menuBtn.setBackground(bg);
		menuBtn.getBackground().setAlpha(100);
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
				mainMenu();
				exit();
                if(GUI != null && GUI.isShowing()) { 
                GUI.dismiss();
                }
			}
		}));
		layout.addView(menuBtn);
		
		GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUI.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 345, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
showMenuBtn();

function showNOGLIDEBtn() {	
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var GlideBtn = new Button(ctx);
			GlideBtn.setText("<Flight> UP");
            GlideBtn.setTextColor(Color.RED);
			GlideBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
            GlideBtn.setPadding(10,10,10,10);
			GlideBtn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0);
					Entity.setPositionRelative(getPlayerEnt(), 0, 0.000, 0);
				}
			}));
			layout.addView(GlideBtn);

            var GlideBtn = new Button(ctx);
			GlideBtn.setText("<Flight> Down");
            GlideBtn.setTextColor(Color.RED);
			GlideBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
            GlideBtn.setPadding(10,10,10,10);
			GlideBtn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()-1.01, getPlayerZ());
					Entity.setPositionRelative(getPlayerEnt(), 0, 0.000, 0);
				}
			}));
			layout.addView(GlideBtn);		

		GUIe = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIe.setBackgroundDrawable(new ColorDrawable(Color.DKGRAY));
		GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
function showAimBtn() {
	
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var AimUpBtn = new Button(ctx);
			AimUpBtn.setText("<Reach> On");
            AimUpBtn.setTextColor(Color.RED);
			AimUpBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
            AimUpBtn.setPadding(10,10,10,10);
			AimUpBtn.getBackground().setAlpha(100);
			AimUpBtn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
      Level.setGameMode(1)
      Player.setCanFly(0)                      
				}
			}));
			layout.addView(AimUpBtn);

            var AimDownBtn = new Button(ctx);
			AimDownBtn.setText("<Reach> Off");
            AimDownBtn.setTextColor(Color.RED);
			AimDownBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
            AimDownBtn.setPadding(10,10,10,10);
			AimDownBtn.getBackground().setAlpha(100);
			AimDownBtn.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
      Level.setGameMode(0)
				}
			}));
			layout.addView(AimDownBtn);

		GUIo = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUIo.setBackgroundDrawable(new ColorDrawable(Color.DKGRAY));
		GUIo.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 200);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}	

//Menu
function mainMenu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout1 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bg);
			menuLayout.getBackground().setAlpha(100);
			menuLayout1.setOrientation(1);
			menuScroll.addView(menuLayout);
			menuLayout1.addView(menuScroll);
			
			var name = new TextView(ctx);
			name.setTextSize(20);
			name.setText(NAME+" "+VERSION);
			name.setTextColor(android.graphics.Color.GREEN);
			name.setGravity(Gravity.CENTER);
			menuLayout.addView(name);
			
			
//HACKS

var aim = new android.widget.Switch(ctx);     
 aim.setText("AimBot");
      aim.setTextColor(android.graphics.Color.RED);
      aim.setPadding(10, 1, 1, 1);
      aim.setTextSize(15);
      aim.setChecked(aimed);
aim.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      aim.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!aimed){
      aimbot = true;
      aimed = true;
      }else{
      aimbot = false;
      aimed = false;
      }
      aim.setChecked(aimed);
      }
      }));
      menuLayout.addView(aim);

var ride = new android.widget.Switch(ctx);     
 ride.setText("HitBox Expander");
      ride.setTextColor(android.graphics.Color.RED);
      ride.setPadding(10, 1, 1, 1);
      ride.setTextSize(15);
      ride.setChecked(rided);
ride.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      ride.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!rided){
      rides = true;
      rided = true;
      }else{
      rides = false;
      rided = false;
      }
      ride.setChecked(rided);
      }
      }));
      menuLayout.addView(ride);

      var gp = new Switch(ctx);
      gp.setText("SprintAid");
      gp.setTextColor(android.graphics.Color.GREEN);
      gp.setPadding(10, 3, 3, 3);
      gp.setTextSize(15);
      gp.setChecked(gped);
gp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      gp.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!gped){
      gps = true;
      gped = true;
      }else{
      gps = false;
      gped = false;
      }
      gp.setChecked(gped);
      }
      }));
      menuLayout.addView(gp);

      var tests = new Switch(ctx);
      tests.setText("WaterDancer");
      tests.setTextColor(android.graphics.Color.BLUE);
      tests.setPadding(10, 3, 3, 3);
      tests.setTextSize(15);
      tests.setChecked(tested);
tests.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      tests.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!tested){
      testss = true;
      tested = true;
      }else{
      testss = false;
      tested = false;
      }
      tests.setChecked(tested);
      }
      }));
      menuLayout.addView(tests);

      var water = new Switch(ctx);
      water.setText("Jesus-Bypass");
      water.setTextColor(android.graphics.Color.GREEN);
      water.setPadding(10, 3, 3, 3);
      water.setTextSize(15);
      water.setChecked(watered);
water.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      water.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!watered){
      waters = true;
      watered = true;
      }else{
      waters = false;
      watered = false;
      }
      water.setChecked(watered);
      }
      }));
      menuLayout.addView(water);

      var lad = new Switch(ctx);
      lad.setText("BypassGlide");
      lad.setTextColor(android.graphics.Color.GREEN);
      lad.setPadding(10, 3, 3, 3);
      lad.setTextSize(15);
      lad.setChecked(laded);
lad.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      lad.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!laded){
      lads = true;
      laded = true;
      }else{
      lads = false;
      laded = false;
      }
      lad.setChecked(laded);
      }
      }));
      menuLayout.addView(lad);

      var safe = new Switch(ctx);
      safe.setText("TwistAura");
      safe.setTextColor(android.graphics.Color.GREEN);
      safe.setPadding(10, 3, 3, 3);
      safe.setTextSize(15);
      safe.setChecked(safed);
safe.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      safe.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!safed){
apoc("Just Jump To activate")
      safes = true;
      safed = true;
      }else{
      safes = false;
      safed = false;
      }
      safe.setChecked(safed);
      }
      }));
      menuLayout.addView(safe);

      var sword = new Switch(ctx);
      sword.setText("AutoBow");
      sword.setTextColor(android.graphics.Color.RED);
      sword.setPadding(10, 3, 3, 3);
      sword.setTextSize(15);
      sword.setChecked(sworded);
sword.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      sword.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!sworded){
      swords = true;
      sworded = true;
      }else{
      swords = false;
      sworded = false;
      }
      sword.setChecked(sworded);
      }
      }));
      menuLayout.addView(sword);

      var potion = new Switch(ctx);
      potion.setText("AntiFallDamage");
      potion.setTextColor(android.graphics.Color.GREEN);
      potion.setPadding(10, 3, 3, 3);
      potion.setTextSize(15);
      potion.setChecked(potioned);
potion.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      potion.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!potioned){
print("it will decrease some fall damage on servers")
      potions = true;
      potioned = true;
      }else{
      potions = false;
      potioned = false;
      }
      potion.setChecked(potioned);
      }
      }));
      menuLayout.addView(potion);

      var speeds = new Switch(ctx);
      speeds.setText("AutoGap");
      speeds.setTextColor(android.graphics.Color.RED);
      speeds.setPadding(10, 3, 3, 3);
      speeds.setTextSize(15);
      speeds.setChecked(speeded);
speeds.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      speeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!speeded){
print("only works on players same as the AutoBow and AutoSword")
      speedss = true;
      speeded = true;
      }else{
      speedss = false;
      speeded = false;
      }
      speeds.setChecked(speeded);
      }
      }));
      menuLayout.addView(speeds);

      var grapples = new Switch(ctx);
      grapples.setText("UnWaterWalk");
      grapples.setTextColor(android.graphics.Color.GREEN);
      grapples.setPadding(10, 3, 3, 3);
      grapples.setTextSize(15);
      grapples.setChecked(grappleed);
grapples.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      grapples.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!grappleed){
print("lets you walk on the waters floor")
      grappless = true;
      grappleed = true;
      }else{
      grappless = false;
      grappleed = false;
      }
      grapples.setChecked(grappleed);
      }
      }));
      menuLayout.addView(grapples);

      var twerks = new Switch(ctx);
      twerks.setText("Criticals");
      twerks.setTextColor(android.graphics.Color.RED);
      twerks.setPadding(10, 3, 3, 3);
      twerks.setTextSize(15);
      twerks.setChecked(twerked);
twerks.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      twerks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!twerked){
      twerkss = true;
      twerked = true;
      }else{
      twerkss = false;
      twerked = false;
      }
      twerks.setChecked(twerked);
      }
      }));
      menuLayout.addView(twerks);

      var bounces = new Switch(ctx);
      bounces.setText("AimAssist");
      bounces.setTextColor(android.graphics.Color.RED);
      bounces.setPadding(10, 3, 3, 3);
      bounces.setTextSize(15);
      bounces.setChecked(bounced);
bounces.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      bounces.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!bounced){
      bouncess = true;
      bounced = true;
      }else{
      bouncess = false;
      bounced = false;
      }
      bounces.setChecked(bounced);
      }
      }));
      menuLayout.addView(bounces);

      var follows = new Switch(ctx);
      follows.setText("[AI]BETA!");
      follows.setTextColor(android.graphics.Color.GREEN);
      follows.setPadding(10, 3, 3, 3);
      follows.setTextSize(15);
      follows.setChecked(followed);
follows.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      follows.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      apoc("Alright here's the list of what the AI does-autowalks-auto turns-autoswims-trys to team when 2 blocks near player-Rage quits after dieing-runs when entity enters 30 blocks of AI-autojumps over blocks");
      apoc("Alright here's the list of what the AI does-autowalks-auto turns-autoswims-trys to team when 2 blocks near player-Rage quits after dieing-runs when entity enters 30 blocks of AI-autojumps over blocks");
      if(!followed){
      followss = true;
      followed = true;
      }else{
      followss = false;
      followed = false;
      }
      follows.setChecked(followed);
      }
      }));
      menuLayout.addView(follows);

      var xps = new Switch(ctx);
      xps.setText("FastBridge");
      xps.setTextColor(android.graphics.Color.BLUE);
      xps.setPadding(10, 3, 3, 3);
      xps.setTextSize(15);
      xps.setChecked(xped);
xps.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      xps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!xped){
      xpss = true;
      xped = true;
      }else{
      xpss = false;
      xped = false;
      }
      xps.setChecked(xped);
      }
      }));
      menuLayout.addView(xps);

      var spam = new Switch(ctx);
      spam.setText("AutoSword");
      spam.setTextColor(android.graphics.Color.RED);
      spam.setPadding(10, 3, 3, 3);
      spam.setTextSize(15);
      spam.setChecked(spamed);
spam.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      spam.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!spamed){
      spams = true;
      spamed = true;
      }else{
      spams = false;
      spamed = false;
      }
      spam.setChecked(spamed);
      }
      }));
      menuLayout.addView(spam);

      var heart = new Switch(ctx);
      heart.setText("FriendAdder");
      heart.setTextColor(android.graphics.Color.BLUE);
      heart.setPadding(10, 3, 3, 3);
      heart.setTextSize(15);
      heart.setChecked(hearted);
heart.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      heart.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!hearted){
print("Hit somebody to friend them and use hitbox expander to unfriend")
      hearts = true;
      hearted = true;
      }else{
      hearts = false;
      hearted = false;
      }
      heart.setChecked(hearted);
      }
      }));
      menuLayout.addView(heart);

      var pam = new Switch(ctx);
      pam.setText("DerpHit");
      pam.setTextColor(android.graphics.Color.RED);
      pam.setPadding(10, 3, 3, 3);
      pam.setTextSize(15);
      pam.setChecked(pamed);
pam.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      pam.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!pamed){
      pams = true;
      pamed = true;
      }else{
      pams = false;
      pamed = false;
      }
      pam.setChecked(pamed);
      }
      }));
      menuLayout.addView(pam);

      var underblocks = new Switch(ctx);
      underblocks.setText("Scaffold");
      underblocks.setTextColor(android.graphics.Color.GREEN);
      underblocks.setPadding(10, 3, 3, 3);
      underblocks.setTextSize(15);
      underblocks.setChecked(underblocked);
underblocks.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      underblocks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!underblocked){
      underblockss = true;
      underblocked = true;
      }else{
      underblockss = false;
      underblocked = false;
      }
      underblocks.setChecked(underblocked);
      }
      }));
      menuLayout.addView(underblocks);

      var view = new Switch(ctx);
      view.setText("AntiEgg");
      view.setTextColor(android.graphics.Color.RED);
      view.setPadding(10, 3, 3, 3);
      view.setTextSize(15);
      view.setChecked(viewed);
view.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      view.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!viewed){
print("AntiEgg Activated!")
      views = true;
      viewed = true;
      }else{
      views = false;
      viewed = false;
      }
      view.setChecked(viewed);
      }
      }));
      menuLayout.addView(view);

      var far = new Switch(ctx);
 far.setText("AntiTnT");
      far.setTextColor(android.graphics.Color.RED);
      far.setPadding(10, 1, 1, 1);
      far.setTextSize(15);
      far.setChecked(fared);
far.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      far.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!fared){
      farbot = true;
      fared = true;
      }else{
      farbot = false;
      fared = false;
      }
      far.setChecked(fared);
      }
      }));
      menuLayout.addView(far);

      var dodges = new Switch(ctx);
      dodges.setText("AntiFireBall");
      dodges.setTextColor(android.graphics.Color.RED);
      dodges.setPadding(10, 3, 3, 3);
      dodges.setTextSize(15);
      dodges.setChecked(dodged);
dodges.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      dodges.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!dodged){
print("Ghast fireballs will no longer hit you")
      dodgess = true;
      dodged = true;
      }else{
      dodgess = false;
      dodged = false;
      }
      dodges.setChecked(dodged);
      }
      }));
      menuLayout.addView(dodges);

      var jetpacks = new Switch(ctx);
      jetpacks.setText("PlaceTower");
      jetpacks.setTextColor(android.graphics.Color.BLUE);
      jetpacks.setPadding(10, 3, 3, 3);
      jetpacks.setTextSize(15);
      jetpacks.setChecked(jetpacked);
jetpacks.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      jetpacks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jetpacked){
      jetpackss = true;
      jetpacked = true;
      }else{
      jetpackss = false;
      jetpacked = false;
      }
      jetpacks.setChecked(jetpacked);
      }
      }));
      menuLayout.addView(jetpacks);

      var ghosts = new Switch(ctx);
      ghosts.setText("HopAura");
      ghosts.setTextColor(android.graphics.Color.RED);
      ghosts.setPadding(10, 3, 3, 3);
      ghosts.setTextSize(15);
      ghosts.setChecked(ghosted);
ghosts.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      ghosts.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!ghosted){
print("when your jumping and hitting it works")
      ghostss = true;
      ghosted = true;
      }else{
      ghostss = false;
      ghosted = false;
      }
      ghosts.setChecked(ghosted);
      }
      }));
      menuLayout.addView(ghosts);

      var taptps = new Switch(ctx);
      taptps.setText("AeralAura");
      taptps.setTextColor(android.graphics.Color.RED);
      taptps.setPadding(10, 3, 3, 3);
      taptps.setTextSize(15);
      taptps.setChecked(taptped);
taptps.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      taptps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!taptped){
      taptpss = true;
      taptped = true;
      }else{
      taptpss = false;
      taptped = false;
      }
      taptps.setChecked(taptped);
      }
      }));
      menuLayout.addView(taptps);

      var hitjumps = new Switch(ctx);
      hitjumps.setText("GroundAura");
      hitjumps.setTextColor(android.graphics.Color.RED);
      hitjumps.setPadding(10, 3, 3, 3);
      hitjumps.setTextSize(15);
      hitjumps.setChecked(hitjumped);
hitjumps.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      hitjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!hitjumped){
print("nobody expects a attack from beneath them")
      hitjumpss = true;
      hitjumped = true;
      }else{
      hitjumpss = false;
      hitjumped = false;
      }
      hitjumps.setChecked(hitjumped);
      }
      }));
      menuLayout.addView(hitjumps);

      var bowaimbots = new Switch(ctx);
      bowaimbots.setText("SwordAimBot");
      bowaimbots.setTextColor(android.graphics.Color.RED);
      bowaimbots.setPadding(10, 3, 3, 3);
      bowaimbots.setTextSize(15);
      bowaimbots.setChecked(bowaimboted);
bowaimbots.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      bowaimbots.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!bowaimboted){
print("only works for stone swords")
      bowaimboted = true;
      bowaimbotss = true;
      }else{
      bowaimboted = false;
      bowaimbotss = false;
      }
      bowaimbots.setChecked(bowaimboted);
      }
      }));
      menuLayout.addView(bowaimbots);

      var stealths = new Switch(ctx);
      stealths.setText("SpeedBow");
      stealths.setTextColor(android.graphics.Color.RED);
      stealths.setPadding(10, 3, 3, 3);
      stealths.setTextSize(15);
      stealths.setChecked(stealthed);
stealths.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      stealths.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!stealthed){
print("when a bow is aquipted you are very fast")
      stealthss = true;
      stealthed = true;
      }else{
      stealthss = false;
      stealthed = false;
      }
      stealths.setChecked(stealthed);
      }
      }));
      menuLayout.addView(stealths);

       var cspeeds = new Switch(ctx);
      cspeeds.setText("BowAimBot");
      cspeeds.setTextColor(android.graphics.Color.RED);
      cspeeds.setPadding(10, 3, 3, 3);
      cspeeds.setTextSize(15);
      cspeeds.setChecked(cspeeded);
cspeeds.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      cspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cspeeded){
      cspeedss = true;
      cspeeded = true;
      }else{
      cspeedss = false;
      cspeeded = false;
      }
      cspeeds.setChecked(cspeeded);
      }
      }));
      menuLayout.addView(cspeeds);

      var snipers = new Switch(ctx);
      snipers.setText("ReachAura");
      snipers.setTextColor(android.graphics.Color.RED);
      snipers.setPadding(10, 3, 3, 3);
      snipers.setTextSize(15);
      snipers.setChecked(snipered);
snipers.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      snipers.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!snipered){
print("please turn reach on with it for better results")
      sniperss = true;
      snipered = true;
      }else{
      ModPE.resetFov();
      sniperss = false;
      snipered = false;
      }
      snipers.setChecked(snipered);
      }
      }));
      menuLayout.addView(snipers);

      var reachs = new Switch(ctx);
      reachs.setText("HitAssist");
      reachs.setTextColor(android.graphics.Color.RED);
      reachs.setPadding(10, 3, 3, 3);
      reachs.setTextSize(15);
      reachs.setChecked(reached);
reachs.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      reachs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!reached){
print("this one is for melee")
      reachss = true;
      reached = true;
      }else{
      reachss = false;
      reached = false;
      }
      reachs.setChecked(reached);
      }
      }));
      menuLayout.addView(reachs);

      var jumpspeeds = new Switch(ctx);
      jumpspeeds.setText("HoverAura");
      jumpspeeds.setTextColor(android.graphics.Color.RED);
      jumpspeeds.setPadding(10, 3, 3, 3);
      jumpspeeds.setTextSize(15);
      jumpspeeds.setChecked(jumpspeeded);
jumpspeeds.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      jumpspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jumpspeeded){
      jumpspeedss = true;
      jumpspeeded = true;
      }else{
      jumpspeedss = false;
      jumpspeeded = false;
      }
      jumpspeeds.setChecked(jumpspeeded);
      }
      }));
      menuLayout.addView(jumpspeeds);

      var backfaces = new Switch(ctx);
      backfaces.setText("[KeyBind] Flight");
      backfaces.setTextColor(android.graphics.Color.BLUE);
      backfaces.setPadding(10, 3, 3, 3);
      backfaces.setTextSize(15);
      backfaces.setChecked(backfaceed);
backfaces.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      backfaces.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!backfaceed){
      showNOGLIDEBtn();
      backfacess = true;
      backfaceed = true;
      }else{
      GUIe.dismiss();
      backfacess = false;
      backfaceed = false;
      }
      backfaces.setChecked(backfaceed);
      }
      }));  
      menuLayout.addView(backfaces);

      var ndglides = new Switch(ctx);
      ndglides.setText("[KeyBind] Reach");
      ndglides.setTextColor(android.graphics.Color.RED);
      ndglides.setPadding(10, 3, 3, 3);
      ndglides.setTextSize(15);
      ndglides.setChecked(ndglideed);
ndglides.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      ndglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!ndglideed){
      showAimBtn();
      ndglidess = true;
      ndglideed = true;
      }else{
      GUIo.dismiss();
      ndglidess = false;
      ndglideed = false;
      }
      ndglides.setChecked(ndglideed);
      }
      }));
      menuLayout.addView(ndglides);

      var sglides = new Switch(ctx);
      sglides.setText("WallAimBot");
      sglides.setTextColor(android.graphics.Color.RED);
      sglides.setPadding(10, 3, 3, 3);
      sglides.setTextSize(15);
      sglides.setChecked(sglideed);
sglides.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      sglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!sglideed){
print("Stay Against a wall for aimbot")
      sglidess = true;
      sglideed = true;
      }else{
      sglidess = false;
      sglideed = false;
      }
      sglides.setChecked(sglideed);
      }
      }));
      menuLayout.addView(sglides);

      var dmgglides = new Switch(ctx);
      dmgglides.setText("SideAura");
      dmgglides.setTextColor(android.graphics.Color.RED);
      dmgglides.setPadding(10, 3, 3, 3);
      dmgglides.setTextSize(15);
      dmgglides.setChecked(dmgglideed);
dmgglides.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      dmgglides.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!dmgglideed){
print("you will target peoples side in combat")
      dmgglidess = true;
      dmgglideed = true;
      }else{
      dmgglidess = false;
      dmgglideed = false;
      }
      dmgglides.setChecked(dmgglideed);
      }
      }));
      menuLayout.addView(dmgglides);

      var autoclimbs = new Switch(ctx);
      autoclimbs.setText("SmoothCam");
      autoclimbs.setTextColor(android.graphics.Color.BLUE);
      autoclimbs.setPadding(10, 3, 3, 3);
      autoclimbs.setTextSize(15);
      autoclimbs.setChecked(autoclimbed);
autoclimbs.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      autoclimbs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!autoclimbed){
print("this fixes that camera glitch when you move your head")
      autoclimbss = true;
      autoclimbed = true;
      }else{
      autoclimbss = false;
      autoclimbed = false;
      }
      autoclimbs.setChecked(autoclimbed);
      }
      }));
      menuLayout.addView(autoclimbs);

     var fullbrights = new Switch(ctx);
      fullbrights.setText("Fullbright");
      fullbrights.setTextColor(android.graphics.Color.BLUE);
      fullbrights.setPadding(10, 3, 3, 3);
      fullbrights.setTextSize(15);
      fullbrights.setChecked(fullbrighted);
fullbrights.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      fullbrights.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!fullbrighted){
    Entity.addEffect(Player.getEntity(), MobEffect.nightVision, 999999, 100, false, false);
      effect=true;
      fullbrightss = true;
      fullbrighted = true;
      }else{
    Block.setLightLevel(0, 0);
      fullbrightss = false;
      fullbrighted = false;
      }
      fullbrights.setChecked(fullbrighted);
      }
      }));
      menuLayout.addView(fullbrights);

      var placetps = new Switch(ctx);
      placetps.setText("Anti-Lag");
      placetps.setTextColor(android.graphics.Color.BLUE);
      placetps.setPadding(10, 3, 3, 3);
      placetps.setTextSize(15);
      placetps.setChecked(placetped);
placetps.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      placetps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!placetped){
print("Anti-Lag is now running!")
      placetpss = true;
      placetped = true;
      }else{
      placetpss = false;
      placetped = false;
      }
      placetps.setChecked(placetped);
      }
      }));
      menuLayout.addView(placetps);

      var leetspeaks = new Switch(ctx);
      leetspeaks.setText("BypassStep");
      leetspeaks.setTextColor(android.graphics.Color.BLUE);
      leetspeaks.setPadding(10, 3, 3, 3);
      leetspeaks.setTextSize(15);
      leetspeaks.setChecked(leetspeaked);
leetspeaks.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      leetspeaks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!leetspeaked){
print("this is the one from my piracy client, have fun")
      leetspeakss = true;
      leetspeaked = true;
      }else{
      leetspeakss = false;
      leetspeaked = false;
      }
      leetspeaks.setChecked(leetspeaked);
      }
      }));
      menuLayout.addView(leetspeaks);
      
                  var button = new android.widget.Button(ctx);
      button.setText('Reach');
      button.setTextColor(android.graphics.Color.RED);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Level.setGameMode(1)
      Player.setCanFly(0)
      }
      }));
      menuLayout.addView(button);

            var button = new android.widget.Button(ctx);
      button.setText('Survival');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setGameMode(0)
      }
      }));
      menuLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('Creative');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
Level.setGameMode(1)
      }
      }));
      menuLayout.addView(button);

                  var button = new android.widget.Button(ctx);
      button.setText('Server Ip Tracer');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      apoc("Tracking. 1%");
      apoc("Tracking.. 6%");
      apoc("Tracking... 13%");
      apoc("Tracking. 24%");
      apoc("Tracking.. 37%");
      apoc("Tracking... 49%");
      apoc("Tracking. 61%");
      apoc("Tracking.. 83%");
      apoc("Tracking... 99%");
      apoc("Tracking Complete!");
      apoc("IP: " + Server.getAddress());
      apoc("IP: " + Server.getAddress());
      }
      }));
      menuLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('DEVELOPERS');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
print("HACKER laastad")
print("CoolCrazyPanda")
print("WolfHaxYT")
print("GreenXpqser")
      }
      }));
      menuLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('BETA TESTERS');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
print("PurpleDreemure")
print("XPsychoYT")
print("SoloTroll")
      }
      }));
      menuLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('Offical Hack Source');
      button.setTextColor(android.graphics.Color.BLUE);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
					var intentURL = new Intent(ctx);
					intentURL.setAction(Intent.ACTION_VIEW);
					intentURL.setData(Uri.parse("https://sites.google.com/view/trollhax/home_1"));
					ctx.startActivity(intentURL);
      }
      }));
      menuLayout.addView(button);

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Support Me On YouTube:HACKER Laastad Support Me On YouTube:HACKER Laastad Support Me On YouTube:HACKER Laastad");
scrollText.setTextSize(30);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView(scrollText);

      menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/2);
			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
			}catch(error){
				Toast.makeText(ctx, "Error: " + error, 1).show();
			}
	}}));
}
//EXIT BUTTON
function exit(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var xLayout = new LinearLayout(ctx);
			var xButton = new Button(ctx);
			xButton.setText('X');
			xButton.setTextColor(Color.RED);
			xButton.setTextSize(15);
			xButton.setBackground(xbg);
			xButton.getBackground().setAlpha(150);
			xButton.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					exitUI.dismiss();
					menu.dismiss();
					showMenuBtn();
				}
			}));
			xLayout.addView(xButton);
			
			exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
			exitUI.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

//FUNCTIONS HERE
function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
	function attackHook(att, vic) {
if(att == Player.getEntity() && rides && Entity.getHealth(vic) > 0) {
Entity.setCollisionSize(vic, 6, 30);
		}
	    if(att == Player.getEntity() && twerkss) {
		var vicx = Entity.getX(vic);
		var vicy = Entity.getY(vic);
		var vicz = Entity.getZ(vic);
		Level.addParticle(ParticleType.lava, vicx-0.2, vicy+1, vicz, 0, 0, 0, 180);
        Level.addParticle(ParticleType.smoke, vicx-0.2, vicy+1, vicz, 0, 0, 0, 400);
		}
   if(twerkss && Utils.Player.isOnGround()) {
					setVelY(getPlayerEnt(), 0.3);
}
	    if(att == Player.getEntity() && hearts) {
Entity.setCollisionSize(vic, 0, 0);
		}
	    if(att == Player.getEntity() && pams) {
		var player = getPlayerEnt();
		var yaw = Math.floor(Entity.getYaw(player));
		var pitch = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, yaw +50, pitch)  
		}
	    if(att == Player.getEntity() && ghostss) {
                lhtick++;
				if(lhtick >= 8) {
                lhtick = 0;
                }
				if(Utils.Velocity.calculateSpeed() >= 0.106 && lhtick == 0) {
					var playerDir = [0, 0, 0];
					toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
					setVelX(getPlayerEnt(), playerDir[0]);
					setVelY(getPlayerEnt(), 0.45);
					setVelZ(getPlayerEnt(), playerDir[2]);
				} else if (Utils.Velocity.calculateSpeed() <= 0.105 && lhtick == 0) {
					setVelX(getPlayerEnt(), 0);
					setVelZ(getPlayerEnt(), 0);
				            }
		}
	    if(att == Player.getEntity() && taptpss) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic),Entity.getZ(vic));
					Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+4.05, getPlayerZ());
				            }
	    if(att == Player.getEntity() && hitjumpss) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic),Entity.getZ(vic));
					Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()-2.01, getPlayerZ());
				            }
		   if(att == Player.getEntity() && sniperss && Entity.getHealth(vic) > 0) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic),Entity.getZ(vic));
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelZ(Player.getEntity(), z * -2);
		}
	    if(att == Player.getEntity() && reachss) {
                 var ent = Player.getPointedEntity();
							var ent = getNearestEntity(8)
							if(ent != null) crosshairAimAt(ent);
				            }
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
	function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
if(xpss){
if(side == BlockFace.NORTH) {
			Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1);
			} else if(side == BlockFace.SOUTH) {
		    Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
			} else if(side == BlockFace.WEST) {
		    Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0);
			} else if(side == BlockFace.EAST) {
			Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0);
			} else if(side == BlockFace.UP) {
			Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
}
}
		if(jetpackss) {
			if(side == BlockFace.NORTH) {
					setVelY(getPlayerEnt(), 0.3);
			} else if(side == BlockFace.SOUTH) {
					setVelY(getPlayerEnt(), 0.3);
			} else if(side == BlockFace.WEST) {
					setVelY(getPlayerEnt(), 0.3);
			} else if(side == BlockFace.EAST) {
					setVelY(getPlayerEnt(), 0.3);
			} else if(side == BlockFace.UP) {
					setVelY(getPlayerEnt(), 0.3);
			}
	    }
	}

function nearEgg(range) {
			var entities = Entity.getAll();
			var small = range;
			var ent = null;
			for (var i = 0; i < entities.length; i++) {
				var x = Entity.getX(entities[i]) - getPlayerX();
				var y = Entity.getY(entities[i]) - getPlayerY();
				var z = Entity.getZ(entities[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				
				if(dist < small && dist > 0) {
					small = dist;
					ent = entities[i];
				   } 
	      }
	return ent; 
}
function nearTnt(range) {
			var entities = Entity.getAll();
			var small = range;
			var ent = null;
			for (var i = 0; i < entities.length; i++) {
				var x = Entity.getX(entities[i]) - getPlayerX();
				var y = Entity.getY(entities[i]) - getPlayerY();
				var z = Entity.getZ(entities[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				
				if(dist < small && dist > 0) {
					small = dist;
					ent = entities[i];
				   } 
	      }
	return ent; 
}
function nearArrow(range) {
			var entities = Entity.getAll();
			var small = range;
			var ent = null;
			for (var i = 0; i < entities.length; i++) {
				var x = Entity.getX(entities[i]) - getPlayerX();
				var y = Entity.getY(entities[i]) - getPlayerY();
				var z = Entity.getZ(entities[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				
				if(dist < small && dist > 0) {
					small = dist;
					ent = entities[i];
				   } 
	      }
	return ent; 
}
function SwordAtEnt(ent, pos){if(ent!=null){var playerX=Entity['getX'](ent)-getPlayerX();var playerY=Entity['getY'](ent)-getPlayerY();var playerZ=Entity['getZ'](ent)-getPlayerZ();if(pos!=null&&posinstanceofArray){playerX=Entity['getX'](ent)-pos[0];playerY=Entity['getY'](ent)-pos[1];playerZ=Entity['getZ'](ent)-pos[2];}var playerID = "63";if(Entity['getEntityTypeId'](ent)!=playerID)playerY+=0.5;var an0x7a=Entity['getX'](ent)+0.5;var hsd0x7nul1=Entity['getY'](ent);var d4tla5h=Entity['getZ'](ent)+0.5;var len=Math['sqrt'](playerX*playerX+playerY*playerY+playerZ*playerZ);var playerY=playerY/len;var screen1=Math['asin'](playerY);screen1=screen1*180.0/Math['PI'];screen1=-screen1;var screen2=-Math['atan2'](an0x7a-(Player['getX']()+0.5),d4tla5h-(Player['getZ']()+0.5))*(180/Math['PI']);if(screen1<89&&screen1>-89){Entity['setRot'](Player['getEntity'](),screen2,screen1);}}};				
function SwordAimAt(ent){var velocity=1;var posX=Entity['getX'](ent)-Player['getX']();var posY=Entity['getEntityTypeId'](ent)==EntityType.PLAYER?Entity['getY'](ent)-Player['getY']():Entity['getY'](ent)+1-Player['getY']();var posZ=Entity['getZ'](ent)-Player['getZ']();var screen2=(Math['atan2'](posZ,posX)*180/Math['PI'])-90;var y2=Math['sqrt'](posX*posX+posZ*posZ);var pi9x=0.007;var semp=(velocity*velocity*velocity*velocity-pi9x*(pi9x*(y2*y2)+2*posY*(velocity*velocity)));var screen1=-(180/Math['PI'])*(Math['atan']((velocity*velocity-Math['sqrt'](semp))/(pi9x*y2)));if(screen1<89&&screen1>-89){/*aim*/setRot(Player['getEntity'](),screen2,screen1);}};

    function modTick() {
if(aimbot) {
							var ent = getNearestEntity(8)
							if(ent != null) crosshairAimAt(ent);
}
}

var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {

   if(gps && Utils.Player.isOnGround()) {
                lhtick++;
				if(lhtick >= 8) {
                lhtick = 0;
                }
				if(Utils.Velocity.calculateSpeed() >= 0.200 && lhtick == 0) {
					var playerDir = [0, 0, 0];
					toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
					setVelX(getPlayerEnt(), playerDir[0]);
					setVelY(getPlayerEnt(), 0.35);
					setVelZ(getPlayerEnt(), playerDir[2]);
				} else if(Utils.Velocity.calculateSpeed() <= 0.100 && lhtick == 0) {
					setVelX(getPlayerEnt(), 0);
					setVelZ(getPlayerEnt(), 0);
				            }
	            }
   if(testss && Utils.Player.isInWater()) {
		var player = getPlayerEnt();
		var yaw = Math.floor(Entity.getYaw(player));
		var pitch = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, yaw +30, pitch)
					setVelY(getPlayerEnt(), 0.2);
				            }	
   if(waters && Utils.Player.isInWater()) {
                lhtick++;
				if(lhtick >= 8) {
                lhtick = 0;
                }
				if(Utils.Velocity.calculateSpeed() >= 0.100 && lhtick == 0) {
					setVelY(getPlayerEnt(), 0.00000);
				} else if(Utils.Velocity.calculateSpeed() <= 0.100 && lhtick == 0) {
					setVelY(getPlayerEnt(), 0.1);
				            }
	            }
   if(lads) {
	bgtick++
	if(Entity.getVelY(getPlayerEnt()) < 1) {
	setVelY(Player.getEntity(), -0.3)
	if(bgtick == 8) {   
    setVelY(getPlayerEnt(), -0.7)
	setVelY(Player.getEntity(), +2)
    bgtick = 0;
         }
       }
   } 
if(safes) {
   if(Entity.getVelY(getPlayerEnt())< -0.3) {
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
		var player = getPlayerEnt();
		var yaw = Math.floor(Entity.getYaw(player));
		var pitch = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, yaw +30, pitch)    
}
}
	if(swords) {
    	var ent = getNearestEntity(30);
    	if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
          var slotId = 0;
          var getInvSword = Player.getInventorySlot(slotId);
          if(getInvSword == 261) {
          var invSword = slotId;
          } else {
          slotId++;
          }
          if(slotId = 27) {
          slotId = 0;
          }
                   Player.setSelectedSlotId(invSword);
        }
        }
if(potions) {
   if(Entity.getVelY(getPlayerEnt())< -0.5) {
	setVelY(Player.getEntity(), 0.00000)
}
}
if(speedss) {
    	var ent = getNearestEntity(4);
    	if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
          var slotId = 0;
          var getInvSword = Player.getInventorySlot(slotId);
          if(getInvSword == 322) {
          var invSword = slotId;
          } else {
          slotId++;
          }
          if(slotId = 27) {
          slotId = 0;
          }
                   Player.setSelectedSlotId(invSword);
        }
}
   if(grappless && Utils.Player.isInWater()) {
	setVelY(Player.getEntity(), -0.2)
		var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.2 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.2 * playerDir[2]);    
}
               if(bouncess) {
                 var ent = Player.getPointedEntity();
               if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
               aimAtEnt(ent);
    	var ent = getNearestEntity(30);
                    }
               }
   if(followss && Utils.Player.isCollidedHorizontally()) {
  		var player = getPlayerEnt();
		var yaw = Math.floor(Entity.getYaw(player));
		var pitch = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, yaw +3, pitch)
	setVelY(Player.getEntity(), 0.4)
}
               if(followss) {
		var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0,1);
        setVelX(getPlayerEnt(), 0.2 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.2 * playerDir[2]);
                    }
   if(followss && Utils.Player.isInWater()) {
	setVelY(Player.getEntity(), 0.1)
}
               if(followss) {
    	var ent = getNearestEntity(30);
    	if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
		var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0,1);
        setVelX(getPlayerEnt(), 0.3 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.3 * playerDir[2]);
                    }
}
               if(followss) {
    	var ent = getNearestEntity(2);
    	if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
Entity.setSneaking(Player.getEntity(), 3);
                    }
}
   if(followss) {
    	if(Entity.getHealth(getPlayerEnt()) <= 0) {
ModPE.leaveGame();
}
}
   if(spams) {
          var slotId = 0;
          var getInvSword = Player.getInventorySlot(slotId);
          if(getInvSword == 276 || getInvSword == 268 || getInvSword == 283 || getInvSword == 267 || getInvSword == 272) {
          var invSword = slotId;
          } else {
          slotId++;
          }
          if(slotId = 27) {
          slotId = 0;
          }
        var ent = getNearestEntity(8);
        if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
                   Player.setSelectedSlotId(invSword);
        }
   }
if(underblockss) {
            var x = Player.getX();
        var y = Player.getY();
        var z = Player.getZ();
        setTile(x, y-2, z, 57, 0);
}
if(views) {
    	var egg = nearEgg(6);
    	if(egg != null && Entity.getEntityTypeId(egg) == EntityType.EGG) {
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
}
}
if(farbot) {
    	var tnt = nearTnt(9);
    	if(tnt != null && Entity.getEntityTypeId(tnt) == EntityType.PRIMED_TNT) {
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
}
}
if(dodgess) {
    	var fireball = nearArrow(9);
    	if(fireball != null && Entity.getEntityTypeId(fireball) == EntityType.FIREBALL) {
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
}
}
   if(bowaimbotss && getCarriedItem() == 272) {
                   var ent = getNearestEntity(10);
                  if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
                      SwordAimAt(ent);
            }
       }
	if(stealthss && getCarriedItem() == 261) {
       setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.1);
       setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.1);
}
   if(cspeedss && getCarriedItem() == 261) {
							var ent = getNearestEntity(30)
							if(ent != null) crosshairAimAt(ent);
            }
   if (jumpspeedss) {
var ent = getNearestEntity(4)
                  if(ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
			  Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1.05, getPlayerZ())	
		var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -0,1);
        setVelX(getPlayerEnt(), 0.3 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.3 * playerDir[2]);			          
   }
}
						if(jumpspeedss) {
							var ent = getNearestEntity(6)
							if(ent != null) crosshairAimAt(ent);
}
   if(backfacess) {
	setVelY(Player.getEntity(), 0.00000)
}
   if(sglidess && Utils.Player.isCollidedHorizontally()) {
							var ent = getNearestEntity(10)
							if(ent != null) crosshairAimAt(ent);
}
if (dmgglidess) {
	var ent = getNearestEntity(8);
		var hit = getYaw() + 45;
      var hitY = getPitch() - 180;
      x = Math.cos(hit * (Math.PI / 180));
      y = Math.sin(hitY * (Math.PI / 180));
      z = Math.sin(hit * (Math.PI / 180));
      setVelX(Player.getEntity(), x * 0.2);
      setVelZ(Player.getEntity(), z * 0.2);
	}
if (dmgglidess) {
	var ent = getNearestEntity(8);
 if(ent != null) crosshairAimAt(ent);
 }
	if(autoclimbss) {
                var player = getPlayerEnt();
		        var yaw = Math.floor(Entity.getYaw(player));
		        var pitch = Math.floor(Entity.getPitch(player));
		        if(pitch <=2) {
			     Entity.setRot(player, yaw, 1)
         }
}
	if(placetpss) {
		Level.setTile(x,y,z,46);
		Level.setTile(x,y-1,z,46);
		Level.setTile(x,y+1,z,46);
		Level.setTile(x+1,y,z,46);
		Level.setTile(x-1,y,z,46);
		Level.setTile(x,y,z+1,46);
		Level.setTile(x,y,z-1,46);
	}
	if(placetpss) {
		Level.setTile(x,y,z,1);
		Level.setTile(x,y-1,z,1);
		Level.setTile(x,y+1,z,1);
		Level.setTile(x+1,y,z,1);
		Level.setTile(x-1,y,z,1);
		Level.setTile(x,y,z+1,1);
		Level.setTile(x,y,z-1,1);
	}
	if(placetpss) {
		Level.setTile(x,y,z,2);
		Level.setTile(x,y-1,z,2);
		Level.setTile(x,y+1,z,2);
		Level.setTile(x+1,y,z,2);
		Level.setTile(x-1,y,z,2);
		Level.setTile(x,y,z+1,2);
		Level.setTile(x,y,z-1,2);
	}
   if (leetspeakss && Utils.Player.isCollidedHorizontally()) {
					Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0);        
   }
                  nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}
rptask();

function apoc(text, showPrefix) {
	try {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				var thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				var layout = new android.widget.LinearLayout(ctx);
				var msg = new android.widget.TextView(ctx);
				if(showPrefix == null) { 
                text = "Tracer: " + text;
				} else { 
                text = showPrefix + ": " + text;
                }
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(15);
				msg.setPadding(10, 10, 10, 10);
				msg.setTextColor(android.graphics.Color.BLACK);
				
				var btnpic = new android.graphics.drawable.GradientDrawable();
				btnpic.setColor(android.graphics.Color.GREEN);
				btnpic.setStroke(5, android.graphics.Color.RED);
				
				layout.addView(msg);
				layout.setBackground(btnpic);
				layout.getBackground().setAlpha(150);
				thetoast.setView(layout);
				thetoast.show();
			}
		}));
	} catch(e) {
		print(e);
	}
}