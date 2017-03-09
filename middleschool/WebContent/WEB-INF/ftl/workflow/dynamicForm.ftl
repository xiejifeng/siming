<form id="frm" method="post">
	<table class="form_tabel">
		<#list formProperties as prop>
			<tr style="height: 25px;">
				<td class="td_title" style="width: 25%;">
					${prop.name}
				</td>
				<td class="td_detail">
					<#if prop.type.name=="string">
						<input type="text" id="${prop.id}" name="${prop.id}"  style="width: 98%;">
					<#elseif prop.type.name=="date">
						<input type="text" class="easyui-datetimebox" id="${prop.id}" name="${prop.id}"  style="width: 98%;">
					<#elseif prop.type.name=="enum">
						<select id="${prop.id}" name="${prop.id}" class="easyui-combobox" style="width: 98%;">
							<#list enums[prop.id] as enum>
								<option value="${enum.key}">${enum.value}</option>
							</#list>
						</select>
					</#if>
				</td>
			</tr>
		</#list>
	</table>
</from>