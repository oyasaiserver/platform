"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains
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
exports.DataCloudflarePagesDomains = exports.DataCloudflarePagesDomainsResultList = exports.DataCloudflarePagesDomainsResultOutputReference = exports.DataCloudflarePagesDomainsResultVerificationDataOutputReference = exports.DataCloudflarePagesDomainsResultValidationDataOutputReference = void 0;
exports.dataCloudflarePagesDomainsResultValidationDataToTerraform = dataCloudflarePagesDomainsResultValidationDataToTerraform;
exports.dataCloudflarePagesDomainsResultValidationDataToHclTerraform = dataCloudflarePagesDomainsResultValidationDataToHclTerraform;
exports.dataCloudflarePagesDomainsResultVerificationDataToTerraform = dataCloudflarePagesDomainsResultVerificationDataToTerraform;
exports.dataCloudflarePagesDomainsResultVerificationDataToHclTerraform = dataCloudflarePagesDomainsResultVerificationDataToHclTerraform;
exports.dataCloudflarePagesDomainsResultToTerraform = dataCloudflarePagesDomainsResultToTerraform;
exports.dataCloudflarePagesDomainsResultToHclTerraform = dataCloudflarePagesDomainsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePagesDomainsResultValidationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesDomainsResultValidationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesDomainsResultValidationDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainsResultValidationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesDomainsResultValidationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "method", {
        // method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultValidationDataOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesDomainsResultValidationDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesDomainsResultValidationDataOutputReference = DataCloudflarePagesDomainsResultValidationDataOutputReference;
function dataCloudflarePagesDomainsResultVerificationDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesDomainsResultVerificationDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesDomainsResultVerificationDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainsResultVerificationDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflarePagesDomainsResultVerificationDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesDomainsResultVerificationDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesDomainsResultVerificationDataOutputReference.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultVerificationDataOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesDomainsResultVerificationDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesDomainsResultVerificationDataOutputReference = DataCloudflarePagesDomainsResultVerificationDataOutputReference;
function dataCloudflarePagesDomainsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePagesDomainsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePagesDomainsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesDomainsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // validation_data - computed: true, optional: false, required: false
        _this._validationData = new DataCloudflarePagesDomainsResultValidationDataOutputReference(_this, "validation_data");
        // verification_data - computed: true, optional: false, required: false
        _this._verificationData = new DataCloudflarePagesDomainsResultVerificationDataOutputReference(_this, "verification_data");
        return _this;
    }
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "domainId", {
        // domain_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "validationData", {
        get: function () {
            return this._validationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "verificationData", {
        get: function () {
            return this._verificationData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomainsResultOutputReference.prototype, "zoneTag", {
        // zone_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_tag');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePagesDomainsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePagesDomainsResultOutputReference = DataCloudflarePagesDomainsResultOutputReference;
var DataCloudflarePagesDomainsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomainsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePagesDomainsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePagesDomainsResultList.prototype.get = function (index) {
        return new DataCloudflarePagesDomainsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePagesDomainsResultList;
}(cdktf.ComplexList));
exports.DataCloudflarePagesDomainsResultList = DataCloudflarePagesDomainsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains cloudflare_pages_domains}
*/
var DataCloudflarePagesDomains = /** @class */ (function (_super) {
    __extends(DataCloudflarePagesDomains, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains cloudflare_pages_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePagesDomainsConfig
    */
    function DataCloudflarePagesDomains(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_pages_domains',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflarePagesDomainsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._projectName = config.projectName;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePagesDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePagesDomains to import
    * @param importFromId The id of the existing DataCloudflarePagesDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/pages_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePagesDomains to import is found
    */
    DataCloudflarePagesDomains.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_domains", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesDomains.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePagesDomains.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "projectName", {
        get: function () {
            return this.getStringAttribute('project_name');
        },
        set: function (value) {
            this._projectName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "projectNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePagesDomains.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePagesDomains.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            project_name: cdktf.stringToTerraform(this._projectName),
        };
    };
    DataCloudflarePagesDomains.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflarePagesDomains.tfResourceType = "cloudflare_pages_domains";
    return DataCloudflarePagesDomains;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePagesDomains = DataCloudflarePagesDomains;
