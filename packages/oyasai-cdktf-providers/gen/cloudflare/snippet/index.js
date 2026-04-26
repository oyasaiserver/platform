"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet
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
exports.Snippet = exports.SnippetMetadataOutputReference = exports.SnippetFilesList = exports.SnippetFilesOutputReference = void 0;
exports.snippetFilesToTerraform = snippetFilesToTerraform;
exports.snippetFilesToHclTerraform = snippetFilesToHclTerraform;
exports.snippetMetadataToTerraform = snippetMetadataToTerraform;
exports.snippetMetadataToHclTerraform = snippetMetadataToHclTerraform;
var cdktf = require("cdktf");
function snippetFilesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        name: cdktf.stringToTerraform(struct.name),
    };
}
function snippetFilesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        content: {
            value: cdktf.stringToHclTerraform(struct.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
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
var SnippetFilesOutputReference = /** @class */ (function (_super) {
    __extends(SnippetFilesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SnippetFilesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SnippetFilesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._content !== undefined) {
                hasAnyValues = true;
                internalValueResult.content = this._content;
            }
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._content = undefined;
                this._name = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._content = value.content;
                this._name = value.name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetFilesOutputReference.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetFilesOutputReference.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetFilesOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetFilesOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return SnippetFilesOutputReference;
}(cdktf.ComplexObject));
exports.SnippetFilesOutputReference = SnippetFilesOutputReference;
var SnippetFilesList = /** @class */ (function (_super) {
    __extends(SnippetFilesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function SnippetFilesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    SnippetFilesList.prototype.get = function (index) {
        return new SnippetFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return SnippetFilesList;
}(cdktf.ComplexList));
exports.SnippetFilesList = SnippetFilesList;
function snippetMetadataToTerraform(struct) {
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
function snippetMetadataToHclTerraform(struct) {
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
var SnippetMetadataOutputReference = /** @class */ (function (_super) {
    __extends(SnippetMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function SnippetMetadataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(SnippetMetadataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(SnippetMetadataOutputReference.prototype, "mainModule", {
        get: function () {
            return this.getStringAttribute('main_module');
        },
        set: function (value) {
            this._mainModule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnippetMetadataOutputReference.prototype, "mainModuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mainModule;
        },
        enumerable: false,
        configurable: true
    });
    return SnippetMetadataOutputReference;
}(cdktf.ComplexObject));
exports.SnippetMetadataOutputReference = SnippetMetadataOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet cloudflare_snippet}
*/
var Snippet = /** @class */ (function (_super) {
    __extends(Snippet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet cloudflare_snippet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnippetConfig
    */
    function Snippet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_snippet',
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
        // files - computed: false, optional: false, required: true
        _this._files = new SnippetFilesList(_this, "files", false);
        // metadata - computed: false, optional: false, required: true
        _this._metadata = new SnippetMetadataOutputReference(_this, "metadata");
        _this._files.internalValue = config.files;
        _this._metadata.internalValue = config.metadata;
        _this._snippetName = config.snippetName;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Snippet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Snippet to import
    * @param importFromId The id of the existing Snippet that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/snippet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Snippet to import is found
    */
    Snippet.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_snippet", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Snippet.prototype, "createdOn", {
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
    Object.defineProperty(Snippet.prototype, "files", {
        get: function () {
            return this._files;
        },
        enumerable: false,
        configurable: true
    });
    Snippet.prototype.putFiles = function (value) {
        this._files.internalValue = value;
    };
    Object.defineProperty(Snippet.prototype, "filesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._files.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Snippet.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    Object.defineProperty(Snippet.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "snippetName", {
        get: function () {
            return this.getStringAttribute('snippet_name');
        },
        set: function (value) {
            this._snippetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "snippetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snippetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Snippet.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(Snippet.prototype, "zoneIdInput", {
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
    Snippet.prototype.synthesizeAttributes = function () {
        return {
            files: cdktf.listMapper(snippetFilesToTerraform, false)(this._files.internalValue),
            metadata: snippetMetadataToTerraform(this._metadata.internalValue),
            snippet_name: cdktf.stringToTerraform(this._snippetName),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    Snippet.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            files: {
                value: cdktf.listMapperHcl(snippetFilesToHclTerraform, false)(this._files.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "SnippetFilesList",
            },
            metadata: {
                value: snippetMetadataToHclTerraform(this._metadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "SnippetMetadata",
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
    Snippet.tfResourceType = "cloudflare_snippet";
    return Snippet;
}(cdktf.TerraformResource));
exports.Snippet = Snippet;
