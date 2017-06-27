/**************************************************
 * Configuring Employees Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/documents',
			handler : function(request, reply) {
				
				reply.view('documents/displayDocuments', {title:'Documents'});
			}
		},
		{
			method : 'POST',
			path : '/documents',
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
	
	name : 'DocumentsModule',
	version : '1.0.0'	
};