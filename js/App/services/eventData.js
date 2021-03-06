myapp.factory('JSONData', function()
{
	
	// var STORAGE_ID='Taskr-JSON-Server';
	var STORAGE_ID='Stoopid';
	// console.log('new factory');
	return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

});




myapp.factory('GetTags',function(JSONData)
{
	var arrayTags=[];
	var obj=JSONData;
	obj.forEach(function(value)
	{
		// console.log(value.TID);
		value.tags.forEach(function(value2)
		{
			var flag=0;
			arrayTags.forEach(function(elem)
			{
				if(value2===elem)
					flag=1;
			});
			if(flag===0)
				arrayTags.push(value2);
			// console.log(value2);
		});
	});

	return arrayTags;
});


myapp.factory('GetMembers',function(JSONData)
{
	var arrayMembers=[];
	var obj=JSONData;
	obj.forEach(function(value)
	{
		// console.log(value.TID);
		value.fol.forEach(function(value2)
		{
			var flag=0;
			arrayMembers.forEach(function(elem)
			{
				if(value2===elem)
				{
					flag=1;
					// break;
				}	
			});
			if(flag===0)
				arrayMembers.push(value2);
			// console.log(value2);
		});
	});

	return arrayMembers;
});



myapp.factory('GetProjectIDs',function(JSONData)
{
	var arrayProjectIDs=[];
	var obj=JSONData;
	obj.forEach(function(value)
	{
		var flag=0;
		arrayProjectIDs.forEach(function(elem)
		{
			if(elem===value.PID)
			{
				flag=1;
				// break;
			}

		});
		if(flag===0)
			arrayProjectIDs.push(value.PID);
	});

	return arrayProjectIDs;
});


