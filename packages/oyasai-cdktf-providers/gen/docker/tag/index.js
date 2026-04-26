"use strict";
// https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag
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
exports.Tag = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag}
*/
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TagConfig
    */
    function Tag(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'docker_tag',
            terraformGeneratorMetadata: {
                providerName: 'docker',
                providerVersion: '4.2.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        _this._id = config.id;
        _this._sourceImage = config.sourceImage;
        _this._tagTriggers = config.tagTriggers;
        _this._targetImage = config.targetImage;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Tag to import
    * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Tag to import is found
    */
    Tag.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "docker_tag", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Tag.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Tag.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Tag.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "sourceImage", {
        get: function () {
            return this.getStringAttribute('source_image');
        },
        set: function (value) {
            this._sourceImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "sourceImageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "sourceImageId", {
        // source_image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "tagTriggers", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tag_triggers'));
        },
        set: function (value) {
            this._tagTriggers = value;
        },
        enumerable: false,
        configurable: true
    });
    Tag.prototype.resetTagTriggers = function () {
        this._tagTriggers = undefined;
    };
    Object.defineProperty(Tag.prototype, "tagTriggersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagTriggers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "targetImage", {
        get: function () {
            return this.getStringAttribute('target_image');
        },
        set: function (value) {
            this._targetImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "targetImageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetImage;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Tag.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            source_image: cdktf.stringToTerraform(this._sourceImage),
            tag_triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagTriggers),
            target_image: cdktf.stringToTerraform(this._targetImage),
        };
    };
    Tag.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_image: {
                value: cdktf.stringToHclTerraform(this._sourceImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_triggers: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagTriggers),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            target_image: {
                value: cdktf.stringToHclTerraform(this._targetImage),
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
    Tag.tfResourceType = "docker_tag";
    return Tag;
}(cdktf.TerraformResource));
exports.Tag = Tag;
