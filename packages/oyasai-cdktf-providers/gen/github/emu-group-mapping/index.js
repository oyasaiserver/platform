"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping
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
exports.EmuGroupMapping = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping}
*/
var EmuGroupMapping = /** @class */ (function (_super) {
    __extends(EmuGroupMapping, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping github_emu_group_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmuGroupMappingConfig
    */
    function EmuGroupMapping(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_emu_group_mapping',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._groupId = config.groupId;
        _this._id = config.id;
        _this._teamSlug = config.teamSlug;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmuGroupMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmuGroupMapping to import
    * @param importFromId The id of the existing EmuGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/emu_group_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmuGroupMapping to import is found
    */
    EmuGroupMapping.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_emu_group_mapping", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmuGroupMapping.prototype, "etag", {
        // ==========
        // ATTRIBUTES
        // ==========
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "groupId", {
        get: function () {
            return this.getNumberAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "groupName", {
        // group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    EmuGroupMapping.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(EmuGroupMapping.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "teamId", {
        // team_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('team_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "teamSlug", {
        get: function () {
            return this.getStringAttribute('team_slug');
        },
        set: function (value) {
            this._teamSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmuGroupMapping.prototype, "teamSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamSlug;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmuGroupMapping.prototype.synthesizeAttributes = function () {
        return {
            group_id: cdktf.numberToTerraform(this._groupId),
            id: cdktf.stringToTerraform(this._id),
            team_slug: cdktf.stringToTerraform(this._teamSlug),
        };
    };
    EmuGroupMapping.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            group_id: {
                value: cdktf.numberToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            team_slug: {
                value: cdktf.stringToHclTerraform(this._teamSlug),
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
    EmuGroupMapping.tfResourceType = "github_emu_group_mapping";
    return EmuGroupMapping;
}(cdktf.TerraformResource));
exports.EmuGroupMapping = EmuGroupMapping;
