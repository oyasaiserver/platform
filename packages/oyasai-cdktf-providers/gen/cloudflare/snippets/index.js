"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets
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
exports.Snippets = exports.SnippetsMetadataOutputReference = void 0;
exports.snippetsMetadataToTerraform = snippetsMetadataToTerraform;
exports.snippetsMetadataToHclTerraform = snippetsMetadataToHclTerraform;
var cdktf = require("cdktf");
function snippetsMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        main_module: cdktf.stringToTerraform(struct.mainModule),
    };
}
function snippetsMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        main_module: {
            value: cdktf.stringToHclTerraform(struct.mainModule),
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
var SnippetsMetadataOutputReference = /** @class */ (function (_super) {
    __extends(SnippetsMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SnippetsMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SnippetsMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._mainModule !== undefined) {
                hasAnyValues = true;
                internalValueResult.mainModule = this._mainModule;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._mainModule = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._mainModule = value.mainModule;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetsMetadataOutputReference.prototype, "mainModule", {
        get: function () {
            return this.getStringAttribute('main_module');
        },
        set: function (value) {
            this._mainModule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetsMetadataOutputReference.prototype, "mainModuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mainModule;
        },
        enumerable: false,
        configurable: true
    });
    return SnippetsMetadataOutputReference;
}(cdktf.ComplexObject));
exports.SnippetsMetadataOutputReference = SnippetsMetadataOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets}
*/
var Snippets = /** @class */ (function (_super) {
    __extends(Snippets, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets cloudflare_snippets} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetsConfig
    */
    function Snippets(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_snippets',
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
        // metadata - computed: false, optional: false, required: true
        _this._metadata = new SnippetsMetadataOutputReference(_this, "metadata");
        _this._files = config.files;
        _this._metadata.internalValue = config.metadata;
        _this._snippetName = config.snippetName;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Snippets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Snippets to import
    * @param importFromId The id of the existing Snippets that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Snippets to import is found
    */
    Snippets.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippets", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Snippets.prototype, "createdOn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "files", {
        get: function () {
            return this.getListAttribute('files');
        },
        set: function (value) {
            this._files = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "filesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._files;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Snippets.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    Object.defineProperty(Snippets.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "snippetName", {
        get: function () {
            return this.getStringAttribute('snippet_name');
        },
        set: function (value) {
            this._snippetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "snippetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snippetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippets.prototype, "zoneIdInput", {
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
    Snippets.prototype.synthesizeAttributes = function () {
        return {
            files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
            metadata: snippetsMetadataToTerraform(this._metadata.internalValue),
            snippet_name: cdktf.stringToTerraform(this._snippetName),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    Snippets.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            files: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            metadata: {
                value: snippetsMetadataToHclTerraform(this._metadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SnippetsMetadata",
            },
            snippet_name: {
                value: cdktf.stringToHclTerraform(this._snippetName),
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
    Snippets.tfResourceType = "cloudflare_snippets";
    return Snippets;
}(cdktf.TerraformResource));
exports.Snippets = Snippets;
