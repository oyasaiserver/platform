"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace
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
exports.WorkersForPlatformsDispatchNamespace = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}
*/
var WorkersForPlatformsDispatchNamespace = /** @class */ (function (_super) {
    __extends(WorkersForPlatformsDispatchNamespace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersForPlatformsDispatchNamespaceConfig = {}
    */
    function WorkersForPlatformsDispatchNamespace(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_workers_for_platforms_dispatch_namespace',
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
        _this._accountId = config.accountId;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersForPlatformsDispatchNamespace to import
    * @param importFromId The id of the existing WorkersForPlatformsDispatchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersForPlatformsDispatchNamespace to import is found
    */
    WorkersForPlatformsDispatchNamespace.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_for_platforms_dispatch_namespace", importId: importFromId, provider: provider });
    };
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersForPlatformsDispatchNamespace.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "createdBy", {
        // created_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "modifiedBy", {
        // modified_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_by');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    WorkersForPlatformsDispatchNamespace.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "namespaceId", {
        // namespace_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "namespaceName", {
        // namespace_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "scriptCount", {
        // script_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('script_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkersForPlatformsDispatchNamespace.prototype, "trustedWorkers", {
        // trusted_workers - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('trusted_workers');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorkersForPlatformsDispatchNamespace.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    WorkersForPlatformsDispatchNamespace.prototype.synthesizeHclAttributes = function () {
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
    WorkersForPlatformsDispatchNamespace.tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespace";
    return WorkersForPlatformsDispatchNamespace;
}(cdktf.TerraformResource));
exports.WorkersForPlatformsDispatchNamespace = WorkersForPlatformsDispatchNamespace;
