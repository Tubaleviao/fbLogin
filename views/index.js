<% if (!user) { %>
	<h2>Welcome! Please <a href='login'> log in</a>.</h2>
<% } else { %>
	<h2>Hello, <%= user.displayName %>, click <a href='logout'>here</a> to logout.</h2>

<% } %>
