"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSecurityTrustedDomains = exports.EmailSecurityTrustedDomainsBodyList = exports.EmailSecurityTrustedDomainsBodyOutputReference = void 0;
exports.emailSecurityTrustedDomainsBodyToTerraform = emailSecurityTrustedDomainsBodyToTerraform;
exports.emailSecurityTrustedDomainsBodyToHclTerraform = emailSecurityTrustedDomainsBodyToHclTerraform;
var cdktf = require("cdktf");
function emailSecurityTrustedDomainsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comments: cdktf.stringToTerraform(struct.comments),
        is_recent: cdktf.booleanToTerraform(struct.isRecent),
        is_regex: cdktf.booleanToTerraform(struct.isRegex),
        is_similarity: cdktf.booleanToTerraform(struct.isSimilarity),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function emailSecurityTrustedDomainsBodyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        comments: {
            value: cdktf.stringToHclTerraform(struct.comments),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_recent: {
            value: cdktf.booleanToHclTerraform(struct.isRecent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_regex: {
            value: cdktf.booleanToHclTerraform(struct.isRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_similarity: {
            value: cdktf.booleanToHclTerraform(struct.isSimilarity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var EmailSecurityTrustedDomainsBodyOutputReference = /** @class */ (function (_super) {
    __extends(EmailSecurityTrustedDomainsBodyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailSecurityTrustedDomainsBodyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._comments !== undefined) {
                hasAnyValues = true;
                internalValueResult.comments = this._comments;
            }
            if (this._isRecent !== undefined) {
                hasAnyValues = true;
                internalValueResult.isRecent = this._isRecent;
            }
            if (this._isRegex !== undefined) {
                hasAnyValues = true;
                internalValueResult.isRegex = this._isRegex;
            }
            if (this._isSimilarity !== undefined) {
                hasAnyValues = true;
                internalValueResult.isSimilarity = this._isSimilarity;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._comments = undefined;
                this._isRecent = undefined;
                this._isRegex = undefined;
                this._isSimilarity = undefined;
                this._pattern = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._comments = value.comments;
                this._isRecent = value.isRecent;
                this._isRegex = value.isRegex;
                this._isSimilarity = value.isSimilarity;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "comments", {
        get: function () {
            return this.getStringAttribute('comments');
        },
        set: function (value) {
            this._comments = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomainsBodyOutputReference.prototype.resetComments = function () {
        this._comments = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "commentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isRecent", {
        get: function () {
            return this.getBooleanAttribute('is_recent');
        },
        set: function (value) {
            this._isRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isRegex", {
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        set: function (value) {
            this._isRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isSimilarity", {
        get: function () {
            return this.getBooleanAttribute('is_similarity');
        },
        set: function (value) {
            this._isSimilarity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "isSimilarityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isSimilarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomainsBodyOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return EmailSecurityTrustedDomainsBodyOutputReference;
}(cdktf.ComplexObject));
exports.EmailSecurityTrustedDomainsBodyOutputReference = EmailSecurityTrustedDomainsBodyOutputReference;
var EmailSecurityTrustedDomainsBodyList = /** @class */ (function (_super) {
    __extends(EmailSecurityTrustedDomainsBodyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailSecurityTrustedDomainsBodyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailSecurityTrustedDomainsBodyList.prototype.get = function (index) {
        return new EmailSecurityTrustedDomainsBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailSecurityTrustedDomainsBodyList;
}(cdktf.ComplexList));
exports.EmailSecurityTrustedDomainsBodyList = EmailSecurityTrustedDomainsBodyList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
var EmailSecurityTrustedDomains = /** @class */ (function (_super) {
    __extends(EmailSecurityTrustedDomains, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityTrustedDomainsConfig = {}
    */
    function EmailSecurityTrustedDomains(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_trusted_domains',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // body - computed: false, optional: true, required: false
        _this._body = new EmailSecurityTrustedDomainsBodyList(_this, "body", false);
        _this._accountId = config.accountId;
        _this._body.internalValue = config.body;
        _this._comments = config.comments;
        _this._isRecent = config.isRecent;
        _this._isRegex = config.isRegex;
        _this._isSimilarity = config.isSimilarity;
        _this._pattern = config.pattern;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing EmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found
    */
    EmailSecurityTrustedDomains.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.putBody = function (value) {
        this._body.internalValue = value;
    };
    EmailSecurityTrustedDomains.prototype.resetBody = function () {
        this._body.internalValue = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "comments", {
        get: function () {
            return this.getStringAttribute('comments');
        },
        set: function (value) {
            this._comments = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetComments = function () {
        this._comments = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "commentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isRecent", {
        get: function () {
            return this.getBooleanAttribute('is_recent');
        },
        set: function (value) {
            this._isRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetIsRecent = function () {
        this._isRecent = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isRegex", {
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        set: function (value) {
            this._isRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetIsRegex = function () {
        this._isRegex = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isSimilarity", {
        get: function () {
            return this.getBooleanAttribute('is_similarity');
        },
        set: function (value) {
            this._isSimilarity = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetIsSimilarity = function () {
        this._isSimilarity = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "isSimilarityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isSimilarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailSecurityTrustedDomains.prototype.resetPattern = function () {
        this._pattern = undefined;
    };
    Object.defineProperty(EmailSecurityTrustedDomains.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmailSecurityTrustedDomains.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            body: cdktf.listMapper(emailSecurityTrustedDomainsBodyToTerraform, false)(this._body.internalValue),
            comments: cdktf.stringToTerraform(this._comments),
            is_recent: cdktf.booleanToTerraform(this._isRecent),
            is_regex: cdktf.booleanToTerraform(this._isRegex),
            is_similarity: cdktf.booleanToTerraform(this._isSimilarity),
            pattern: cdktf.stringToTerraform(this._pattern),
        };
    };
    EmailSecurityTrustedDomains.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            body: {
                value: cdktf.listMapperHcl(emailSecurityTrustedDomainsBodyToHclTerraform, false)(this._body.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailSecurityTrustedDomainsBodyList",
            },
            comments: {
                value: cdktf.stringToHclTerraform(this._comments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_recent: {
                value: cdktf.booleanToHclTerraform(this._isRecent),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_regex: {
                value: cdktf.booleanToHclTerraform(this._isRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_similarity: {
                value: cdktf.booleanToHclTerraform(this._isSimilarity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmailSecurityTrustedDomains.tfResourceType = "cloudflare_email_security_trusted_domains";
    return EmailSecurityTrustedDomains;
}(cdktf.TerraformResource));
exports.EmailSecurityTrustedDomains = EmailSecurityTrustedDomains;
