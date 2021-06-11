class Game {

    constructor(){
         this.count=createElement('h1')
       
    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state 
        })
    }
    start(){
        if (gameState===0) {
            player=new Player ()
            player.getCount()
            form=new Form()
            form.display(); 
        }
        car1=createSprite(100,200)
        car1.addImage(car1i)
        car2=createSprite(300,200)
        car2.addImage(car2i)
        car3=createSprite(500,200)
        car3.addImage(car3i)
        car4=createSprite(700,200)
        car4.addImage(car4i) 
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        background(ground)
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        Player.getPlayerInfo()
        if (allPlayers!=undefined) {
            var x=175,y
            var index=0 
            for (var plr in allPlayers){
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            
            index=index+1
            cars[index-1].x=x
            cars[index-1].y=y
            if (index===player.index) {
                fill(20,230,99)
                ellipse(x,y,60,100)
              camera.position.x=displayWidth/2
              camera.position.y=cars[index-1].y
            }   
            }
        }
if(keyIsDown(UP_ARROW)&&player.index!=0){
       player.distance=player.distance+10
       player.update()
       
}
if (player.distance>3860) {
    gameState=2
}
drawSprites();
    }
    end(){
        console.log("game over")
    }
    countDown(){
        background("white")
        
        if(frameCount%20===0){
            num=num-1
        }
        if (num<=0)
        this.count.html("start")
        else
            this.count.html("loading...\n"+num)
        this.count.position(displayWidth/2-50,displayHeight/2)
        
    }
}