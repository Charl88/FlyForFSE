chrome.storage.sync.get(['flyForGroup', 'groupid'], function(result) {
	const findFlyForGroup = $(`a[href^='javascript:doSubmit(${result.groupid})']`).eq(0);
	if (findFlyForGroup && (!result.flyForGroup || result.flyForGroup === undefined)) {
		const form = $('form[name="groupForm"]').eq(0);
		form.find('input[name="id"]').val(result.groupid);
		form.submit();
	}
})
