let login = prompt("Enter login");
        if (login === null) {
            alert("Cancelled by user!!!");
        } else {
            const adminLogin = "admin";
            if (login !== adminLogin) {
                alert("Access denied!!!");
            } else {
                const adminPassword = "m4ngo1zh4ackz0r";
                let password = prompt("Enter password");
                if (password === null) {
                    alert("Cancelled by user!!!");
                } else {
                    if (password !== adminPassword) {
                        alert("Access denied!!!");
                    } else {
                        alert("Welcome home!!!");
                    }
                }
            }
        }