/**************************************************
 * Configuring User Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/user-management/users',
			handler : function(request, reply) {
				
				reply.view('user-management/users/displayUsersProfile', {title:'Users'});
			}
		},
		{
			method : 'POST',
			path : '/user-management/userprofile',
			handler : function(request, reply) {
				
			}
		}
		
		
		
	]);
	
	next();
};

/**
 * Plugin attributes...
 * we have here the Name and the Version of the plugin
 */
exports.register.attributes = {
	
	name : 'UserManagementProfile',
	version : '1.0.0'	
};