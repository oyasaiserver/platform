"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain
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
exports.PagesDomain = exports.PagesDomainVerificationDataOutputReference = exports.PagesDomainValidationDataOutputReference = void 0;
exports.pagesDomainValidationDataToTerraform = pagesDomainValidationDataToTerraform;
exports.pagesDomainValidationDataToHclTerraform = pagesDomainValidationDataToHclTerraform;
exports.pagesDomainVerificationDataToTerraform = pagesDomainVerificationDataToTerraform;
exports.pagesDomainVerificationDataToHclTerraform = pagesDomainVerificationDataToHclTerraform;
var cdktf = require("cdktf");
function pagesDomainValidationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesDomainValidationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesDomainValidationDataOutputReference = /** @class */ (function (_super) {
    __extends(PagesDomainValidationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesDomainValidationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainValidationDataOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return PagesDomainValidationDataOutputReference;
}(cdktf.ComplexObject));
exports.PagesDomainValidationDataOutputReference = PagesDomainValidationDataOutputReference;
function pagesDomainVerificationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function pagesDomainVerificationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var PagesDomainVerificationDataOutputReference = /** @class */ (function (_super) {
    __extends(PagesDomainVerificationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function PagesDomainVerificationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(PagesDomainVerificationDataOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainVerificationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomainVerificationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return PagesDomainVerificationDataOutputReference;
}(cdktf.ComplexObject));
exports.PagesDomainVerificationDataOutputReference = PagesDomainVerificationDataOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain cloudflare_pages_domain}
*/
var PagesDomain = /** @class */ (function (_super) {
    __extends(PagesDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain cloudflare_pages_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PagesDomainConfig
    */
    function PagesDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pages_domain',
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
        // validation_data - computed: true, optional: false, required: false
        _this._validationData = new PagesDomainValidationDataOutputReference(_this, "validation_data");
        // verification_data - computed: true, optional: false, required: false
        _this._verificationData = new PagesDomainVerificationDataOutputReference(_this, "verification_data");
        _this._accountId = config.accountId;
        _this._name = config.name;
        _this._projectName = config.projectName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PagesDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PagesDomain to import
    * @param importFromId The id of the existing PagesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PagesDomain to import is found
    */
    PagesDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(PagesDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    PagesDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(PagesDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "domainId", {
        // domain_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "validationData", {
        get: function () {
            return this._validationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "verificationData", {
        get: function () {
            return this._verificationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PagesDomain.prototype, "zoneTag", {
        // zone_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PagesDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            project_name: cdktf.stringToTerraform(this._projectName),
        };
    };
    PagesDomain.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_name: {
                value: cdktf.stringToHclTerraform(this._projectName),
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
    PagesDomain.tfResourceType = "cloudflare_pages_domain";
    return PagesDomain;
}(cdktf.TerraformResource));
exports.PagesDomain = PagesDomain;
