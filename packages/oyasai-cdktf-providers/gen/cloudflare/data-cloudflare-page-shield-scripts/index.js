"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts
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
exports.DataCloudflarePageShieldScripts = exports.DataCloudflarePageShieldScriptsVersionsList = exports.DataCloudflarePageShieldScriptsVersionsOutputReference = void 0;
exports.dataCloudflarePageShieldScriptsVersionsToTerraform = dataCloudflarePageShieldScriptsVersionsToTerraform;
exports.dataCloudflarePageShieldScriptsVersionsToHclTerraform = dataCloudflarePageShieldScriptsVersionsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflarePageShieldScriptsVersionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflarePageShieldScriptsVersionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflarePageShieldScriptsVersionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldScriptsVersionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldScriptsVersionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "cryptominingScore", {
        // cryptomining_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cryptomining_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "dataflowScore", {
        // dataflow_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('dataflow_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "fetchedAt", {
        // fetched_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fetched_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "hash", {
        // hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "jsIntegrityScore", {
        // js_integrity_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('js_integrity_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "magecartScore", {
        // magecart_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('magecart_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "malwareScore", {
        // malware_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('malware_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScriptsVersionsOutputReference.prototype, "obfuscationScore", {
        // obfuscation_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('obfuscation_score');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflarePageShieldScriptsVersionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflarePageShieldScriptsVersionsOutputReference = DataCloudflarePageShieldScriptsVersionsOutputReference;
var DataCloudflarePageShieldScriptsVersionsList = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldScriptsVersionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflarePageShieldScriptsVersionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflarePageShieldScriptsVersionsList.prototype.get = function (index) {
        return new DataCloudflarePageShieldScriptsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflarePageShieldScriptsVersionsList;
}(cdktf.ComplexList));
exports.DataCloudflarePageShieldScriptsVersionsList = DataCloudflarePageShieldScriptsVersionsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}
*/
var DataCloudflarePageShieldScripts = /** @class */ (function (_super) {
    __extends(DataCloudflarePageShieldScripts, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflarePageShieldScriptsConfig
    */
    function DataCloudflarePageShieldScripts(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_page_shield_scripts',
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
        // versions - computed: true, optional: false, required: false
        _this._versions = new DataCloudflarePageShieldScriptsVersionsList(_this, "versions", false);
        _this._scriptId = config.scriptId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflarePageShieldScripts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScripts to import
    * @param importFromId The id of the existing DataCloudflarePageShieldScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found
    */
    DataCloudflarePageShieldScripts.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_scripts", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "addedAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // added_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('added_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "cryptominingScore", {
        // cryptomining_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cryptomining_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "dataflowScore", {
        // dataflow_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('dataflow_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "domainReportedMalicious", {
        // domain_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('domain_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "fetchedAt", {
        // fetched_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fetched_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "firstPageUrl", {
        // first_page_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_page_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "firstSeenAt", {
        // first_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('first_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "hash", {
        // hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "jsIntegrityScore", {
        // js_integrity_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('js_integrity_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "lastSeenAt", {
        // last_seen_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "magecartScore", {
        // magecart_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('magecart_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "maliciousDomainCategories", {
        // malicious_domain_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_domain_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "maliciousUrlCategories", {
        // malicious_url_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('malicious_url_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "malwareScore", {
        // malware_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('malware_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "obfuscationScore", {
        // obfuscation_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('obfuscation_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "pageUrls", {
        // page_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('page_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "scriptId", {
        get: function () {
            return this.getStringAttribute('script_id');
        },
        set: function (value) {
            this._scriptId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "scriptIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scriptId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "urlContainsCdnCgiPath", {
        // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_contains_cdn_cgi_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "urlReportedMalicious", {
        // url_reported_malicious - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('url_reported_malicious');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "versions", {
        get: function () {
            return this._versions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflarePageShieldScripts.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflarePageShieldScripts.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflarePageShieldScripts.prototype.synthesizeAttributes = function () {
        return {
            script_id: cdktf.stringToTerraform(this._scriptId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflarePageShieldScripts.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            script_id: {
                value: cdktf.stringToHclTerraform(this._scriptId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflarePageShieldScripts.tfResourceType = "cloudflare_page_shield_scripts";
    return DataCloudflarePageShieldScripts;
}(cdktf.TerraformDataSource));
exports.DataCloudflarePageShieldScripts = DataCloudflarePageShieldScripts;
