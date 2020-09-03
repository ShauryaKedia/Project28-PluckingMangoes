class slingshot{
	constructor(bodyA,pointB)
	{
		
		var options={ 
			bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.004, 
			length:1
			
		}
		
		
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
		this.bodyA=bodyA
		this.pointB=pointB
	}

	attach(body){
		this.sling.bodyA=body;
	}

	fly()
	{
		this.sling.bodyA=null;
	}

	display()
	{
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}