<% if Tags %>
	<ul class="aside__menu menu vertical">
		<% loop Tags %>
			<li>
				<a href="{$Link}" class="wow wow-fade-in">
					{$Title}
				</a>
			</li>
		<% end_loop %>
	</ul>
<% end_if %>
