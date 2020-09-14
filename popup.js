document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get("groupid", function (data) {
        document.getElementById("groupid").value = data.groupid
    })

    function saveKey (e) {
        e.preventDefault()
        chrome.storage.sync.set({
            groupid: document.getElementById("groupid").value
        }, function () {
            document.getElementById("status").innerText = "Saved!"
            setTimeout(() => {
                document.getElementById("status").innerText = ""
            }, 2000);
        })
    }


    document.getElementById("saveBtn").addEventListener('click', saveKey)

    var flyForGroup = document.getElementById('flyForGroup');

    chrome.storage.sync.get(['flyForGroup'], function(result) {
        if (result.flyForGroup) {
            flyForGroup.innerText="Turn On";
        } else {
            flyForGroup.innerText="Turn Off";
        }
    });

    flyForGroup.addEventListener('click', function() {
        chrome.storage.sync.get(['flyForGroup'], function(result) {
            if (result.flyForGroup) {
                chrome.storage.sync.set({'flyForGroup': false}, function() {});
                flyForGroup.innerText="Turn Off";
            } else {
                chrome.storage.sync.set({'flyForGroup': true}, function() {});
                flyForGroup.innerText="Turn On";
            }
        });
    });
});