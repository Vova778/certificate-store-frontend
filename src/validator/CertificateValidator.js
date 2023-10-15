class CertificateValidator {
    static regexPatterns = {
        name: /^([A-Za-z0-9_ ]{6,30})$/,
        description: /^([A-Za-z0-9_ ]{12,1000})$/,
        tag: /^(#[A-Za-z0-9_]{3,15})$/,
    };

    static errorMessages = {
        name: 'Title length must not be less than 6 and greater than 30 characters and can only contain letters, numbers and underscores',
        description: 'Description length must not be less than 12 and greater than 1000 characters and can only contain letters, numbers and underscores',
        price: 'Price must be a number or float and be greater than 0',
        duration: 'Duration must be a number greater than 3',
        tag: 'Tag length must not be less than 3 and greater than 15 characters, can only contain letters, numbers and underscores',
    };

    static validateField(value, fieldName) {
        if (!this.regexPatterns[fieldName].test(value)) {
            return this.errorMessages[fieldName];
        }
        return '';
    }

    static validateName(name) {
        return this.validateField(name, 'name');
    }

    static validateDescription(description) {
        return this.validateField(description, 'description');
    }

    static validatePrice(price) {
        if ((isNaN(price) && !isNaN(parseFloat(price))) || price <= 0) {
            return this.errorMessages.price;
        }
        return '';
    }

    static validateDuration(duration) {
        if (isNaN(duration) && duration < 0) {
            return this.errorMessages.duration;
        }
        return '';
    }

    static validateTag(tag) {
        return this.validateField(tag.text, 'tag');
    }

    static validateTags(tags) {
        for (const tag of tags) {
            const tagErrorMessage = this.validateTag(tag);
            if (tagErrorMessage) {
                return tagErrorMessage;
            }
        }
        return '';
    }

    static validateCertificate(name, description, price, duration, tags) {
        const nameErrorMessage = this.validateName(name);
        const descriptionErrorMessage = this.validateDescription(description);
        const priceErrorMessage = this.validatePrice(price);
        const durationErrorMessage = this.validateDuration(duration);
        const tagErrorMessage = this.validateTags(tags);

        return {
            nameErrorMessage,
            descriptionErrorMessage,
            priceErrorMessage,
            durationErrorMessage,
            tagErrorMessage,
        };
    }
}

export default CertificateValidator;
