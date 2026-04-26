"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain
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
exports.DataCloudflarePagesDomain = exports.DataCloudflarePagesDomainVerificationDataOutputReference = exports.DataCloudflarePagesDomainValidationDataOutputReference = void 0;
exports.dataCloudflarePagesDomainValidationDataToTerraform = dataCloudflarePagesDomainValidationDataToTerraform;
exports.dataCloudflarePagesDomainValidationDataToHclTerraform = dataCloudflarePagesDomainValidationDataToHclTerraform;
exports.dataCloudflarePagesDomainVerificationDataToTerraform = dataCloudflarePagesDomainVerificationDataToTerraform;
exports.dataCloudflarePagesDomainVerificationDataToHclTerraform = dataCloudflarePagesDomainVerificationDataToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePagesDomainValidationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesDomainValidationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesDomainValidationDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainValidationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesDomainValidationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainValidationDataOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesDomainValidationDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesDomainValidationDataOutputReference = DataCloudflarePagesDomainValidationDataOutputReference;
function dataCloudflarePagesDomainVerificationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesDomainVerificationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesDomainVerificationDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainVerificationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesDomainVerificationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesDomainVerificationDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesDomainVerificationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainVerificationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesDomainVerificationDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesDomainVerificationDataOutputReference = DataCloudflarePagesDomainVerificationDataOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain cloudflare_pages_domain}
*/
var DataCloudflarePagesDomain = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain cloudflare_pages_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesDomainConfig
    */
    function DataCloudflarePagesDomain(scope, id, config) {
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
        _this._validationData = new DataCloudflarePagesDomainValidationDataOutputReference(_this, "validation_data");
        // verification_data - computed: true, optional: false, required: false
        _this._verificationData = new DataCloudflarePagesDomainVerificationDataOutputReference(_this, "verification_data");
        _this._accountId = config.accountId;
        _this._domainName = config.domainName;
        _this._projectName = config.projectName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesDomain to import
    * @param importFromId The id of the existing DataCloudflarePagesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesDomain to import is found
    */
    DataCloudflarePagesDomain.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_domain", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesDomain.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "domainId", {
        // domain_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "validationData", {
        get: function () {
            return this._validationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "verificationData", {
        get: function () {
            return this._verificationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomain.prototype, "zoneTag", {
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
    DataCloudflarePagesDomain.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            domain_name: cdktf.stringToTerraform(this._domainName),
            project_name: cdktf.stringToTerraform(this._projectName),
        };
    };
    DataCloudflarePagesDomain.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktf.stringToHclTerraform(this._domainName),
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
    DataCloudflarePagesDomain.tfResourceType = "cloudflare_pages_domain";
    return DataCloudflarePagesDomain;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePagesDomain = DataCloudflarePagesDomain;
