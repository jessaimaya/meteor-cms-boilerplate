if(Meteor.isClient){
    
    Template.login.events({
         'submit #login-form' : function(e, t){
             e.preventDefault();

             var email = t.find('#login-email').value
             , password = t.find('#login-password').value;

             Meteor.loginWithPassword(email, password, function(err){
                 if (err){
                     console.log("Err: "+err);
                 }
                 else{
                     console.log("Login success");
                     Router.go("/admin");
                 }
             });
             return false; 
      }
    });
   

    
}
