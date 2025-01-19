function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let pattern = /^pet_[a-zA-Z0-9]+$/;

        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (pattern.test(input)) {
            result = 'valid syntax!' + '\u{2705}';
        } else {
            result = 'invalid syntax!' + '\u{274C}';
        }

            document.getElementById('result').innerText = result;
}


