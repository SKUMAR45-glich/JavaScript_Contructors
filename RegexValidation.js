//RegexJS Demo

function CheckNameUsingRegex(name) {
    let nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);

    if (nameRegex.test(name)) {
        console.log("Valid Name");
    }
    else {
        console.log("Invalid Name");
    }
}

function CheckIDUsingRegex(id) {
    let idRegex = new RegExp(/^[1-9][0-9]*$/);

    if (idRegex.test(id)) {
        console.log("Valid ID");
    }
    else {
        console.log("Invalid ID");
    }
}


CheckNameUsingRegex(100);
CheckNameUsingRegex(0);