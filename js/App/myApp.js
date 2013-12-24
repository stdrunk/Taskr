// Add due date functionality
// Add Star Marked/Favorited functionality
// Add Followers functionality on individual Tasks
// Add Tags on Individual Tasks
// Add Filter based on Tags


hello=function()
{
    console.log("Hello");
}

var myapp=angular.module('myapp',['ui.state','ui.keypress']);

myapp.controller('DataCtrl',function($scope,$http,$stateParams,JSONData,GetTags,GetMembers)
{
    
    $scope.JsonData=JSONData;
    $scope.state=$stateParams;
    $scope.routeTID=$stateParams.TID;
    $scope.routePID=$stateParams.PID;

    $scope.arrayOfTags=GetTags;
    $scope.arrayOfMembers=GetMembers;
    
    $scope.SaveTask=function(TID, PID)
    {
        console.log($scope.JsonData[TID-1].TN);
        console.log($scope.JsonData[TID-1].TD);
        
        console.log($scope.JsonData[TID-1].fol);
        console.log($scope.JsonData[TID-1].star);
    }


    //On Change of checkbox eventHandler
    $scope.updateSelection=function(e,TID)
    {
        
        // console.log(e);
        // console.log(e.srcElement.checked);
        TaskName='inputTaskName'+TID;
        // console.log(TaskName);
        ModData=
        {
            "TID":TID,
            "PID":$scope.JsonData[TID-1].PID,
            "TN":document.getElementById(TaskName).value,
            checked:e.srcElement.checked
        };
        console.log(ModData);
        $scope.updateTask(ModData);
    }


    $scope.updateTaskOnEnter=function(e,TID)
    {
        TaskName='inputTaskName'+TID;
        ModData=
        {
            "TID":TID,
            "PID":$scope.JsonData[TID-1].PID,
            "TN":document.getElementById(TaskName).value,
            checked:$scope.JsonData[TID-1].checked
        };
        console.log(ModData);
        $scope.updateTask(ModData);


        //Make New Task
        // $scope.createNewTask();
    }
    
    //To update the task whenever return key is pressed for a task
    //It updates only the 'TN' and the 'done'
    $scope.updateTask=function(sendJSONdata)
    {
        // console.log(sendJSONdata);
        //Send sendJSONdata to the server for updation
    }

});


myapp.config(function($stateProvider,$urlRouterProvider,$routeProvider)
{
  //
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("") 
   

  $stateProvider
    .state('route1',
    {
        url:"/:PID",
        views:
        {
            "ProjectPane":
            {
            templateUrl:"css/partials/Tasks.html",
            controller:"DataCtrl"
            }            
        }
      
    })



        // .state('route1.task',
            .state('route1.task',
            {
                url:"/task/:TID",
                views:
                {
                    // The @ suffix addresses the view in the higher state
                    "TaskPane@": 
                    {
                        templateUrl:"css/partials/IndiTasks.html",
                        controller:"DataCtrl"        
                    }
                    
                }
                
            })


});