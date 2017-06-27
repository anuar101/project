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
			path : '/user-management/groups',
			handler : function(request, reply) {
				
				reply.view('user-management/groups/displayGroups', {title:'Groups'});
			}
		},
		{
			method : 'POST',
			path : '/user-management/groups',
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
	
	name : 'GroupManagementGroups',
	version : '1.0.0'	
};