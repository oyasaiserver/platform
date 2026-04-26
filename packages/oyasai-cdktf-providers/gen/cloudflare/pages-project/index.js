// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function pagesProjectBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_caching: cdktf.booleanToTerraform(struct.buildCaching),
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        destination_dir: cdktf.stringToTerraform(struct.destinationDir),
        root_dir: cdktf.stringToTerraform(struct.rootDir),
        web_analytics_tag: cdktf.stringToTerraform(struct.webAnalyticsTag),
        web_analytics_token: cdktf.stringToTerraform(struct.webAnalyticsToken),
    };
}
export function pagesProjectBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        build_caching: {
            value: cdktf.booleanToHclTerraform(struct.buildCaching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        build_command: {
            value: cdktf.stringToHclTerraform(struct.buildCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_dir: {
            value: cdktf.stringToHclTerraform(struct.destinationDir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        root_dir: {
            value: cdktf.stringToHclTerraform(struct.rootDir),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_analytics_tag: {
            value: cdktf.stringToHclTerraform(struct.webAnalyticsTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_analytics_token: {
            value: cdktf.stringToHclTerraform(struct.webAnalyticsToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._buildCaching !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildCaching = this._buildCaching;
        }
        if (this._buildCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildCommand = this._buildCommand;
        }
        if (this._destinationDir !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationDir = this._destinationDir;
        }
        if (this._rootDir !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootDir = this._rootDir;
        }
        if (this._webAnalyticsTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.webAnalyticsTag = this._webAnalyticsTag;
        }
        if (this._webAnalyticsToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.webAnalyticsToken = this._webAnalyticsToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buildCaching = undefined;
            this._buildCommand = undefined;
            this._destinationDir = undefined;
            this._rootDir = undefined;
            this._webAnalyticsTag = undefined;
            this._webAnalyticsToken = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buildCaching = value.buildCaching;
            this._buildCommand = value.buildCommand;
            this._destinationDir = value.destinationDir;
            this._rootDir = value.rootDir;
            this._webAnalyticsTag = value.webAnalyticsTag;
            this._webAnalyticsToken = value.webAnalyticsToken;
        }
    }
    // build_caching - computed: true, optional: true, required: false
    _buildCaching;
    get buildCaching() {
        return this.getBooleanAttribute('build_caching');
    }
    set buildCaching(value) {
        this._buildCaching = value;
    }
    resetBuildCaching() {
        this._buildCaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildCachingInput() {
        return this._buildCaching;
    }
    // build_command - computed: true, optional: true, required: false
    _buildCommand;
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    set buildCommand(value) {
        this._buildCommand = value;
    }
    resetBuildCommand() {
        this._buildCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildCommandInput() {
        return this._buildCommand;
    }
    // destination_dir - computed: true, optional: true, required: false
    _destinationDir;
    get destinationDir() {
        return this.getStringAttribute('destination_dir');
    }
    set destinationDir(value) {
        this._destinationDir = value;
    }
    resetDestinationDir() {
        this._destinationDir = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationDirInput() {
        return this._destinationDir;
    }
    // root_dir - computed: true, optional: true, required: false
    _rootDir;
    get rootDir() {
        return this.getStringAttribute('root_dir');
    }
    set rootDir(value) {
        this._rootDir = value;
    }
    resetRootDir() {
        this._rootDir = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rootDirInput() {
        return this._rootDir;
    }
    // web_analytics_tag - computed: true, optional: true, required: false
    _webAnalyticsTag;
    get webAnalyticsTag() {
        return this.getStringAttribute('web_analytics_tag');
    }
    set webAnalyticsTag(value) {
        this._webAnalyticsTag = value;
    }
    resetWebAnalyticsTag() {
        this._webAnalyticsTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webAnalyticsTagInput() {
        return this._webAnalyticsTag;
    }
    // web_analytics_token - computed: true, optional: true, required: false
    _webAnalyticsToken;
    get webAnalyticsToken() {
        return this.getStringAttribute('web_analytics_token');
    }
    set webAnalyticsToken(value) {
        this._webAnalyticsToken = value;
    }
    resetWebAnalyticsToken() {
        this._webAnalyticsToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webAnalyticsTokenInput() {
        return this._webAnalyticsToken;
    }
}
export function pagesProjectCanonicalDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // build_caching - computed: true, optional: false, required: false
    get buildCaching() {
        return this.getBooleanAttribute('build_caching');
    }
    // build_command - computed: true, optional: false, required: false
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    // destination_dir - computed: true, optional: false, required: false
    get destinationDir() {
        return this.getStringAttribute('destination_dir');
    }
    // root_dir - computed: true, optional: false, required: false
    get rootDir() {
        return this.getStringAttribute('root_dir');
    }
    // web_analytics_tag - computed: true, optional: false, required: false
    get webAnalyticsTag() {
        return this.getStringAttribute('web_analytics_tag');
    }
    // web_analytics_token - computed: true, optional: false, required: false
    get webAnalyticsToken() {
        return this.getStringAttribute('web_analytics_token');
    }
}
export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // branch - computed: true, optional: false, required: false
    get branch() {
        return this.getStringAttribute('branch');
    }
    // commit_dirty - computed: true, optional: false, required: false
    get commitDirty() {
        return this.getBooleanAttribute('commit_dirty');
    }
    // commit_hash - computed: true, optional: false, required: false
    get commitHash() {
        return this.getStringAttribute('commit_hash');
    }
    // commit_message - computed: true, optional: false, required: false
    get commitMessage() {
        return this.getStringAttribute('commit_message');
    }
}
export function pagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // metadata - computed: true, optional: false, required: false
    _metadata = new PagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
    get metadata() {
        return this._metadata;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function pagesProjectCanonicalDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class PagesProjectCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectCanonicalDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ended_on - computed: true, optional: false, required: false
    get endedOn() {
        return this.getStringAttribute('ended_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // started_on - computed: true, optional: false, required: false
    get startedOn() {
        return this.getStringAttribute('started_on');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export function pagesProjectCanonicalDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // deployments_enabled - computed: true, optional: false, required: false
    get deploymentsEnabled() {
        return this.getBooleanAttribute('deployments_enabled');
    }
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // path_excludes - computed: true, optional: false, required: false
    get pathExcludes() {
        return this.getListAttribute('path_excludes');
    }
    // path_includes - computed: true, optional: false, required: false
    get pathIncludes() {
        return this.getListAttribute('path_includes');
    }
    // pr_comments_enabled - computed: true, optional: false, required: false
    get prCommentsEnabled() {
        return this.getBooleanAttribute('pr_comments_enabled');
    }
    // preview_branch_excludes - computed: true, optional: false, required: false
    get previewBranchExcludes() {
        return this.getListAttribute('preview_branch_excludes');
    }
    // preview_branch_includes - computed: true, optional: false, required: false
    get previewBranchIncludes() {
        return this.getListAttribute('preview_branch_includes');
    }
    // preview_deployment_setting - computed: true, optional: false, required: false
    get previewDeploymentSetting() {
        return this.getStringAttribute('preview_deployment_setting');
    }
    // production_branch - computed: true, optional: false, required: false
    get productionBranch() {
        return this.getStringAttribute('production_branch');
    }
    // production_deployments_enabled - computed: true, optional: false, required: false
    get productionDeploymentsEnabled() {
        return this.getBooleanAttribute('production_deployments_enabled');
    }
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getStringAttribute('repo_id');
    }
    // repo_name - computed: true, optional: false, required: false
    get repoName() {
        return this.getStringAttribute('repo_name');
    }
}
export function pagesProjectCanonicalDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // config - computed: true, optional: false, required: false
    _config = new PagesProjectCanonicalDeploymentSourceConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function pagesProjectCanonicalDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ended_on - computed: true, optional: false, required: false
    get endedOn() {
        return this.getStringAttribute('ended_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // started_on - computed: true, optional: false, required: false
    get startedOn() {
        return this.getStringAttribute('started_on');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export class PagesProjectCanonicalDeploymentStagesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new PagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function pagesProjectCanonicalDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectCanonicalDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // aliases - computed: true, optional: false, required: false
    get aliases() {
        return this.getListAttribute('aliases');
    }
    // build_config - computed: true, optional: false, required: false
    _buildConfig = new PagesProjectCanonicalDeploymentBuildConfigOutputReference(this, "build_config");
    get buildConfig() {
        return this._buildConfig;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // deployment_trigger - computed: true, optional: false, required: false
    _deploymentTrigger = new PagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
    get deploymentTrigger() {
        return this._deploymentTrigger;
    }
    // env_vars - computed: true, optional: false, required: false
    _envVars = new PagesProjectCanonicalDeploymentEnvVarsMap(this, "env_vars");
    get envVars() {
        return this._envVars;
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getStringAttribute('environment');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_skipped - computed: true, optional: false, required: false
    get isSkipped() {
        return this.getBooleanAttribute('is_skipped');
    }
    // latest_stage - computed: true, optional: false, required: false
    _latestStage = new PagesProjectCanonicalDeploymentLatestStageOutputReference(this, "latest_stage");
    get latestStage() {
        return this._latestStage;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // project_id - computed: true, optional: false, required: false
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    // project_name - computed: true, optional: false, required: false
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    // short_id - computed: true, optional: false, required: false
    get shortId() {
        return this.getStringAttribute('short_id');
    }
    // source - computed: true, optional: false, required: false
    _source = new PagesProjectCanonicalDeploymentSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    // stages - computed: true, optional: false, required: false
    _stages = new PagesProjectCanonicalDeploymentStagesList(this, "stages", false);
    get stages() {
        return this._stages;
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // uses_functions - computed: true, optional: false, required: false
    get usesFunctions() {
        return this.getBooleanAttribute('uses_functions');
    }
}
export function pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        project_id: cdktf.stringToTerraform(struct.projectId),
    };
}
export function pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectId = value.projectId;
        }
    }
    // project_id - computed: true, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
}
export class PagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dataset: cdktf.stringToTerraform(struct.dataset),
    };
}
export function pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dataset !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataset = this._dataset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataset = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataset = value.dataset;
        }
    }
    // dataset - computed: true, optional: false, required: true
    _dataset;
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    set dataset(value) {
        this._dataset = value;
    }
    // Temporarily expose input value. Use with caution.
    get datasetInput() {
        return this._dataset;
    }
}
export class PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export class PagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class PagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
export function pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespaceId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespaceId = value.namespaceId;
        }
    }
    // namespace_id - computed: true, optional: false, required: true
    _namespaceId;
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    set namespaceId(value) {
        this._namespaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceIdInput() {
        return this._namespaceId;
    }
}
export class PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }
    // type - computed: true, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // value - computed: true, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class PagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
export function pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespaceId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespaceId = value.namespaceId;
        }
    }
    // namespace_id - computed: true, optional: false, required: true
    _namespaceId;
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    set namespaceId(value) {
        this._namespaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceIdInput() {
        return this._namespaceId;
    }
}
export class PagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
    };
}
export function pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewLimitsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cpuMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuMs = this._cpuMs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuMs = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuMs = value.cpuMs;
        }
    }
    // cpu_ms - computed: true, optional: false, required: true
    _cpuMs;
    get cpuMs() {
        return this.getNumberAttribute('cpu_ms');
    }
    set cpuMs(value) {
        this._cpuMs = value;
    }
    // Temporarily expose input value. Use with caution.
    get cpuMsInput() {
        return this._cpuMs;
    }
}
export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
    };
}
export function pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._certificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateId = this._certificateId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateId = value.certificateId;
        }
    }
    // certificate_id - computed: true, optional: false, required: true
    _certificateId;
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    set certificateId(value) {
        this._certificateId = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateIdInput() {
        return this._certificateId;
    }
}
export class PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
}
export function pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export class PagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.jurisdiction = this._jurisdiction;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jurisdiction = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jurisdiction = value.jurisdiction;
            this._name = value.name;
        }
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // name - computed: true, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export class PagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
export function pagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._entrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entrypoint = this._entrypoint;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entrypoint = undefined;
            this._environment = undefined;
            this._service = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entrypoint = value.entrypoint;
            this._environment = value.environment;
            this._service = value.service;
        }
    }
    // entrypoint - computed: true, optional: true, required: false
    _entrypoint;
    get entrypoint() {
        return this.getStringAttribute('entrypoint');
    }
    set entrypoint(value) {
        this._entrypoint = value;
    }
    resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entrypointInput() {
        return this._entrypoint;
    }
    // environment - computed: true, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // service - computed: true, optional: false, required: true
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
}
export class PagesProjectDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
    };
}
export function pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._indexName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._indexName = value.indexName;
        }
    }
    // index_name - computed: true, optional: false, required: true
    _indexName;
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    set indexName(value) {
        this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    get indexNameInput() {
        return this._indexName;
    }
}
export class PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsPreviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAiBindingsToTerraform)(struct.aiBindings),
        always_use_latest_compatibility_date: cdktf.booleanToTerraform(struct.alwaysUseLatestCompatibilityDate),
        analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform)(struct.analyticsEngineDatasets),
        browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewBrowsersToTerraform)(struct.browsers),
        build_image_major_version: cdktf.numberToTerraform(struct.buildImageMajorVersion),
        compatibility_date: cdktf.stringToTerraform(struct.compatibilityDate),
        compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.compatibilityFlags),
        d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform)(struct.d1Databases),
        durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform)(struct.durableObjectNamespaces),
        env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewEnvVarsToTerraform)(struct.envVars),
        fail_open: cdktf.booleanToTerraform(struct.failOpen),
        hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform)(struct.hyperdriveBindings),
        kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform)(struct.kvNamespaces),
        limits: pagesProjectDeploymentConfigsPreviewLimitsToTerraform(struct.limits),
        mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform)(struct.mtlsCertificates),
        placement: pagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct.placement),
        queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewQueueProducersToTerraform)(struct.queueProducers),
        r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewR2BucketsToTerraform)(struct.r2Buckets),
        services: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewServicesToTerraform)(struct.services),
        usage_model: cdktf.stringToTerraform(struct.usageModel),
        vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform)(struct.vectorizeBindings),
        wrangler_config_hash: cdktf.stringToTerraform(struct.wranglerConfigHash),
    };
}
export function pagesProjectDeploymentConfigsPreviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ai_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform)(struct.aiBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewAiBindingsMap",
        },
        always_use_latest_compatibility_date: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseLatestCompatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        analytics_engine_datasets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform)(struct.analyticsEngineDatasets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap",
        },
        browsers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform)(struct.browsers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewBrowsersMap",
        },
        build_image_major_version: {
            value: cdktf.numberToHclTerraform(struct.buildImageMajorVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        compatibility_date: {
            value: cdktf.stringToHclTerraform(struct.compatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compatibility_flags: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.compatibilityFlags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        d1_databases: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform)(struct.d1Databases),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewD1DatabasesMap",
        },
        durable_object_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform)(struct.durableObjectNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap",
        },
        env_vars: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform)(struct.envVars),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewEnvVarsMap",
        },
        fail_open: {
            value: cdktf.booleanToHclTerraform(struct.failOpen),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hyperdrive_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform)(struct.hyperdriveBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap",
        },
        kv_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform)(struct.kvNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewKvNamespacesMap",
        },
        limits: {
            value: pagesProjectDeploymentConfigsPreviewLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreviewLimits",
        },
        mtls_certificates: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform)(struct.mtlsCertificates),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap",
        },
        placement: {
            value: pagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreviewPlacement",
        },
        queue_producers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform)(struct.queueProducers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewQueueProducersMap",
        },
        r2_buckets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform)(struct.r2Buckets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewR2BucketsMap",
        },
        services: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewServicesToHclTerraform)(struct.services),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewServicesMap",
        },
        usage_model: {
            value: cdktf.stringToHclTerraform(struct.usageModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vectorize_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform)(struct.vectorizeBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap",
        },
        wrangler_config_hash: {
            value: cdktf.stringToHclTerraform(struct.wranglerConfigHash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._aiBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aiBindings = this._aiBindings?.internalValue;
        }
        if (this._alwaysUseLatestCompatibilityDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
        }
        if (this._analyticsEngineDatasets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
        }
        if (this._browsers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.browsers = this._browsers?.internalValue;
        }
        if (this._buildImageMajorVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
        }
        if (this._compatibilityDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.compatibilityDate = this._compatibilityDate;
        }
        if (this._compatibilityFlags !== undefined) {
            hasAnyValues = true;
            internalValueResult.compatibilityFlags = this._compatibilityFlags;
        }
        if (this._d1Databases?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.d1Databases = this._d1Databases?.internalValue;
        }
        if (this._durableObjectNamespaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
        }
        if (this._envVars?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.envVars = this._envVars?.internalValue;
        }
        if (this._failOpen !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOpen = this._failOpen;
        }
        if (this._hyperdriveBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
        }
        if (this._kvNamespaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
        }
        if (this._limits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limits = this._limits?.internalValue;
        }
        if (this._mtlsCertificates?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
        }
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._queueProducers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueProducers = this._queueProducers?.internalValue;
        }
        if (this._r2Buckets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
        }
        if (this._services?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.services = this._services?.internalValue;
        }
        if (this._usageModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageModel = this._usageModel;
        }
        if (this._vectorizeBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
        }
        if (this._wranglerConfigHash !== undefined) {
            hasAnyValues = true;
            internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aiBindings.internalValue = undefined;
            this._alwaysUseLatestCompatibilityDate = undefined;
            this._analyticsEngineDatasets.internalValue = undefined;
            this._browsers.internalValue = undefined;
            this._buildImageMajorVersion = undefined;
            this._compatibilityDate = undefined;
            this._compatibilityFlags = undefined;
            this._d1Databases.internalValue = undefined;
            this._durableObjectNamespaces.internalValue = undefined;
            this._envVars.internalValue = undefined;
            this._failOpen = undefined;
            this._hyperdriveBindings.internalValue = undefined;
            this._kvNamespaces.internalValue = undefined;
            this._limits.internalValue = undefined;
            this._mtlsCertificates.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._queueProducers.internalValue = undefined;
            this._r2Buckets.internalValue = undefined;
            this._services.internalValue = undefined;
            this._usageModel = undefined;
            this._vectorizeBindings.internalValue = undefined;
            this._wranglerConfigHash = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aiBindings.internalValue = value.aiBindings;
            this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
            this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
            this._browsers.internalValue = value.browsers;
            this._buildImageMajorVersion = value.buildImageMajorVersion;
            this._compatibilityDate = value.compatibilityDate;
            this._compatibilityFlags = value.compatibilityFlags;
            this._d1Databases.internalValue = value.d1Databases;
            this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
            this._envVars.internalValue = value.envVars;
            this._failOpen = value.failOpen;
            this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
            this._kvNamespaces.internalValue = value.kvNamespaces;
            this._limits.internalValue = value.limits;
            this._mtlsCertificates.internalValue = value.mtlsCertificates;
            this._placement.internalValue = value.placement;
            this._queueProducers.internalValue = value.queueProducers;
            this._r2Buckets.internalValue = value.r2Buckets;
            this._services.internalValue = value.services;
            this._usageModel = value.usageModel;
            this._vectorizeBindings.internalValue = value.vectorizeBindings;
            this._wranglerConfigHash = value.wranglerConfigHash;
        }
    }
    // ai_bindings - computed: true, optional: true, required: false
    _aiBindings = new PagesProjectDeploymentConfigsPreviewAiBindingsMap(this, "ai_bindings");
    get aiBindings() {
        return this._aiBindings;
    }
    putAiBindings(value) {
        this._aiBindings.internalValue = value;
    }
    resetAiBindings() {
        this._aiBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiBindingsInput() {
        return this._aiBindings.internalValue;
    }
    // always_use_latest_compatibility_date - computed: true, optional: true, required: false
    _alwaysUseLatestCompatibilityDate;
    get alwaysUseLatestCompatibilityDate() {
        return this.getBooleanAttribute('always_use_latest_compatibility_date');
    }
    set alwaysUseLatestCompatibilityDate(value) {
        this._alwaysUseLatestCompatibilityDate = value;
    }
    resetAlwaysUseLatestCompatibilityDate() {
        this._alwaysUseLatestCompatibilityDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alwaysUseLatestCompatibilityDateInput() {
        return this._alwaysUseLatestCompatibilityDate;
    }
    // analytics_engine_datasets - computed: true, optional: true, required: false
    _analyticsEngineDatasets = new PagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
    get analyticsEngineDatasets() {
        return this._analyticsEngineDatasets;
    }
    putAnalyticsEngineDatasets(value) {
        this._analyticsEngineDatasets.internalValue = value;
    }
    resetAnalyticsEngineDatasets() {
        this._analyticsEngineDatasets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get analyticsEngineDatasetsInput() {
        return this._analyticsEngineDatasets.internalValue;
    }
    // browsers - computed: true, optional: true, required: false
    _browsers = new PagesProjectDeploymentConfigsPreviewBrowsersMap(this, "browsers");
    get browsers() {
        return this._browsers;
    }
    putBrowsers(value) {
        this._browsers.internalValue = value;
    }
    resetBrowsers() {
        this._browsers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browsersInput() {
        return this._browsers.internalValue;
    }
    // build_image_major_version - computed: true, optional: true, required: false
    _buildImageMajorVersion;
    get buildImageMajorVersion() {
        return this.getNumberAttribute('build_image_major_version');
    }
    set buildImageMajorVersion(value) {
        this._buildImageMajorVersion = value;
    }
    resetBuildImageMajorVersion() {
        this._buildImageMajorVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildImageMajorVersionInput() {
        return this._buildImageMajorVersion;
    }
    // compatibility_date - computed: true, optional: true, required: false
    _compatibilityDate;
    get compatibilityDate() {
        return this.getStringAttribute('compatibility_date');
    }
    set compatibilityDate(value) {
        this._compatibilityDate = value;
    }
    resetCompatibilityDate() {
        this._compatibilityDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityDateInput() {
        return this._compatibilityDate;
    }
    // compatibility_flags - computed: true, optional: true, required: false
    _compatibilityFlags;
    get compatibilityFlags() {
        return this.getListAttribute('compatibility_flags');
    }
    set compatibilityFlags(value) {
        this._compatibilityFlags = value;
    }
    resetCompatibilityFlags() {
        this._compatibilityFlags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityFlagsInput() {
        return this._compatibilityFlags;
    }
    // d1_databases - computed: true, optional: true, required: false
    _d1Databases = new PagesProjectDeploymentConfigsPreviewD1DatabasesMap(this, "d1_databases");
    get d1Databases() {
        return this._d1Databases;
    }
    putD1Databases(value) {
        this._d1Databases.internalValue = value;
    }
    resetD1Databases() {
        this._d1Databases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get d1DatabasesInput() {
        return this._d1Databases.internalValue;
    }
    // durable_object_namespaces - computed: true, optional: true, required: false
    _durableObjectNamespaces = new PagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(this, "durable_object_namespaces");
    get durableObjectNamespaces() {
        return this._durableObjectNamespaces;
    }
    putDurableObjectNamespaces(value) {
        this._durableObjectNamespaces.internalValue = value;
    }
    resetDurableObjectNamespaces() {
        this._durableObjectNamespaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durableObjectNamespacesInput() {
        return this._durableObjectNamespaces.internalValue;
    }
    // env_vars - computed: true, optional: true, required: false
    _envVars = new PagesProjectDeploymentConfigsPreviewEnvVarsMap(this, "env_vars");
    get envVars() {
        return this._envVars;
    }
    putEnvVars(value) {
        this._envVars.internalValue = value;
    }
    resetEnvVars() {
        this._envVars.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get envVarsInput() {
        return this._envVars.internalValue;
    }
    // fail_open - computed: true, optional: true, required: false
    _failOpen;
    get failOpen() {
        return this.getBooleanAttribute('fail_open');
    }
    set failOpen(value) {
        this._failOpen = value;
    }
    resetFailOpen() {
        this._failOpen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failOpenInput() {
        return this._failOpen;
    }
    // hyperdrive_bindings - computed: true, optional: true, required: false
    _hyperdriveBindings = new PagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(this, "hyperdrive_bindings");
    get hyperdriveBindings() {
        return this._hyperdriveBindings;
    }
    putHyperdriveBindings(value) {
        this._hyperdriveBindings.internalValue = value;
    }
    resetHyperdriveBindings() {
        this._hyperdriveBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hyperdriveBindingsInput() {
        return this._hyperdriveBindings.internalValue;
    }
    // kv_namespaces - computed: true, optional: true, required: false
    _kvNamespaces = new PagesProjectDeploymentConfigsPreviewKvNamespacesMap(this, "kv_namespaces");
    get kvNamespaces() {
        return this._kvNamespaces;
    }
    putKvNamespaces(value) {
        this._kvNamespaces.internalValue = value;
    }
    resetKvNamespaces() {
        this._kvNamespaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kvNamespacesInput() {
        return this._kvNamespaces.internalValue;
    }
    // limits - computed: true, optional: true, required: false
    _limits = new PagesProjectDeploymentConfigsPreviewLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // mtls_certificates - computed: true, optional: true, required: false
    _mtlsCertificates = new PagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(this, "mtls_certificates");
    get mtlsCertificates() {
        return this._mtlsCertificates;
    }
    putMtlsCertificates(value) {
        this._mtlsCertificates.internalValue = value;
    }
    resetMtlsCertificates() {
        this._mtlsCertificates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtlsCertificatesInput() {
        return this._mtlsCertificates.internalValue;
    }
    // placement - computed: true, optional: true, required: false
    _placement = new PagesProjectDeploymentConfigsPreviewPlacementOutputReference(this, "placement");
    get placement() {
        return this._placement;
    }
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement.internalValue;
    }
    // queue_producers - computed: true, optional: true, required: false
    _queueProducers = new PagesProjectDeploymentConfigsPreviewQueueProducersMap(this, "queue_producers");
    get queueProducers() {
        return this._queueProducers;
    }
    putQueueProducers(value) {
        this._queueProducers.internalValue = value;
    }
    resetQueueProducers() {
        this._queueProducers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueProducersInput() {
        return this._queueProducers.internalValue;
    }
    // r2_buckets - computed: true, optional: true, required: false
    _r2Buckets = new PagesProjectDeploymentConfigsPreviewR2BucketsMap(this, "r2_buckets");
    get r2Buckets() {
        return this._r2Buckets;
    }
    putR2Buckets(value) {
        this._r2Buckets.internalValue = value;
    }
    resetR2Buckets() {
        this._r2Buckets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get r2BucketsInput() {
        return this._r2Buckets.internalValue;
    }
    // services - computed: true, optional: true, required: false
    _services = new PagesProjectDeploymentConfigsPreviewServicesMap(this, "services");
    get services() {
        return this._services;
    }
    putServices(value) {
        this._services.internalValue = value;
    }
    resetServices() {
        this._services.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get servicesInput() {
        return this._services.internalValue;
    }
    // usage_model - computed: true, optional: true, required: false
    _usageModel;
    get usageModel() {
        return this.getStringAttribute('usage_model');
    }
    set usageModel(value) {
        this._usageModel = value;
    }
    resetUsageModel() {
        this._usageModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageModelInput() {
        return this._usageModel;
    }
    // vectorize_bindings - computed: true, optional: true, required: false
    _vectorizeBindings = new PagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(this, "vectorize_bindings");
    get vectorizeBindings() {
        return this._vectorizeBindings;
    }
    putVectorizeBindings(value) {
        this._vectorizeBindings.internalValue = value;
    }
    resetVectorizeBindings() {
        this._vectorizeBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vectorizeBindingsInput() {
        return this._vectorizeBindings.internalValue;
    }
    // wrangler_config_hash - computed: true, optional: true, required: false
    _wranglerConfigHash;
    get wranglerConfigHash() {
        return this.getStringAttribute('wrangler_config_hash');
    }
    set wranglerConfigHash(value) {
        this._wranglerConfigHash = value;
    }
    resetWranglerConfigHash() {
        this._wranglerConfigHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wranglerConfigHashInput() {
        return this._wranglerConfigHash;
    }
}
export function pagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        project_id: cdktf.stringToTerraform(struct.projectId),
    };
}
export function pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        project_id: {
            value: cdktf.stringToHclTerraform(struct.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectId = value.projectId;
        }
    }
    // project_id - computed: true, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
}
export class PagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dataset: cdktf.stringToTerraform(struct.dataset),
    };
}
export function pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dataset !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataset = this._dataset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataset = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataset = value.dataset;
        }
    }
    // dataset - computed: true, optional: false, required: true
    _dataset;
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    set dataset(value) {
        this._dataset = value;
    }
    // Temporarily expose input value. Use with caution.
    get datasetInput() {
        return this._dataset;
    }
}
export class PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }
}
export class PagesProjectDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class PagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
export function pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespaceId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespaceId = value.namespaceId;
        }
    }
    // namespace_id - computed: true, optional: false, required: true
    _namespaceId;
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    set namespaceId(value) {
        this._namespaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceIdInput() {
        return this._namespaceId;
    }
}
export class PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }
    // type - computed: true, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // value - computed: true, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export class PagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
export function pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }
    // id - computed: true, optional: false, required: true
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
}
export class PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
    };
}
export function pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespaceId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespaceId = value.namespaceId;
        }
    }
    // namespace_id - computed: true, optional: false, required: true
    _namespaceId;
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    set namespaceId(value) {
        this._namespaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceIdInput() {
        return this._namespaceId;
    }
}
export class PagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
    };
}
export function pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionLimitsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cpuMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuMs = this._cpuMs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuMs = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuMs = value.cpuMs;
        }
    }
    // cpu_ms - computed: true, optional: false, required: true
    _cpuMs;
    get cpuMs() {
        return this.getNumberAttribute('cpu_ms');
    }
    set cpuMs(value) {
        this._cpuMs = value;
    }
    // Temporarily expose input value. Use with caution.
    get cpuMsInput() {
        return this._cpuMs;
    }
}
export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
    };
}
export function pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._certificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateId = this._certificateId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateId = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateId = value.certificateId;
        }
    }
    // certificate_id - computed: true, optional: false, required: true
    _certificateId;
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    set certificateId(value) {
        this._certificateId = value;
    }
    // Temporarily expose input value. Use with caution.
    get certificateIdInput() {
        return this._certificateId;
    }
}
export class PagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
}
export function pagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: true, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export class PagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
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
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.jurisdiction = this._jurisdiction;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jurisdiction = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jurisdiction = value.jurisdiction;
            this._name = value.name;
        }
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // name - computed: true, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export class PagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionServicesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
export function pagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._entrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entrypoint = this._entrypoint;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entrypoint = undefined;
            this._environment = undefined;
            this._service = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entrypoint = value.entrypoint;
            this._environment = value.environment;
            this._service = value.service;
        }
    }
    // entrypoint - computed: true, optional: true, required: false
    _entrypoint;
    get entrypoint() {
        return this.getStringAttribute('entrypoint');
    }
    set entrypoint(value) {
        this._entrypoint = value;
    }
    resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entrypointInput() {
        return this._entrypoint;
    }
    // environment - computed: true, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // service - computed: true, optional: false, required: true
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
}
export class PagesProjectDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
    };
}
export function pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._indexName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._indexName = value.indexName;
        }
    }
    // index_name - computed: true, optional: false, required: true
    _indexName;
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    set indexName(value) {
        this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    get indexNameInput() {
        return this._indexName;
    }
}
export class PagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectDeploymentConfigsProductionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ai_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAiBindingsToTerraform)(struct.aiBindings),
        always_use_latest_compatibility_date: cdktf.booleanToTerraform(struct.alwaysUseLatestCompatibilityDate),
        analytics_engine_datasets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform)(struct.analyticsEngineDatasets),
        browsers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionBrowsersToTerraform)(struct.browsers),
        build_image_major_version: cdktf.numberToTerraform(struct.buildImageMajorVersion),
        compatibility_date: cdktf.stringToTerraform(struct.compatibilityDate),
        compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.compatibilityFlags),
        d1_databases: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionD1DatabasesToTerraform)(struct.d1Databases),
        durable_object_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform)(struct.durableObjectNamespaces),
        env_vars: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionEnvVarsToTerraform)(struct.envVars),
        fail_open: cdktf.booleanToTerraform(struct.failOpen),
        hyperdrive_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform)(struct.hyperdriveBindings),
        kv_namespaces: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionKvNamespacesToTerraform)(struct.kvNamespaces),
        limits: pagesProjectDeploymentConfigsProductionLimitsToTerraform(struct.limits),
        mtls_certificates: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform)(struct.mtlsCertificates),
        placement: pagesProjectDeploymentConfigsProductionPlacementToTerraform(struct.placement),
        queue_producers: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionQueueProducersToTerraform)(struct.queueProducers),
        r2_buckets: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionR2BucketsToTerraform)(struct.r2Buckets),
        services: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionServicesToTerraform)(struct.services),
        usage_model: cdktf.stringToTerraform(struct.usageModel),
        vectorize_bindings: cdktf.hashMapper(pagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform)(struct.vectorizeBindings),
        wrangler_config_hash: cdktf.stringToTerraform(struct.wranglerConfigHash),
    };
}
export function pagesProjectDeploymentConfigsProductionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        ai_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform)(struct.aiBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionAiBindingsMap",
        },
        always_use_latest_compatibility_date: {
            value: cdktf.booleanToHclTerraform(struct.alwaysUseLatestCompatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        analytics_engine_datasets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform)(struct.analyticsEngineDatasets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap",
        },
        browsers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionBrowsersToHclTerraform)(struct.browsers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionBrowsersMap",
        },
        build_image_major_version: {
            value: cdktf.numberToHclTerraform(struct.buildImageMajorVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        compatibility_date: {
            value: cdktf.stringToHclTerraform(struct.compatibilityDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compatibility_flags: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.compatibilityFlags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        d1_databases: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform)(struct.d1Databases),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionD1DatabasesMap",
        },
        durable_object_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform)(struct.durableObjectNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap",
        },
        env_vars: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform)(struct.envVars),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionEnvVarsMap",
        },
        fail_open: {
            value: cdktf.booleanToHclTerraform(struct.failOpen),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hyperdrive_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform)(struct.hyperdriveBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap",
        },
        kv_namespaces: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform)(struct.kvNamespaces),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionKvNamespacesMap",
        },
        limits: {
            value: pagesProjectDeploymentConfigsProductionLimitsToHclTerraform(struct.limits),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProductionLimits",
        },
        mtls_certificates: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform)(struct.mtlsCertificates),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionMtlsCertificatesMap",
        },
        placement: {
            value: pagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct.placement),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProductionPlacement",
        },
        queue_producers: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform)(struct.queueProducers),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionQueueProducersMap",
        },
        r2_buckets: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform)(struct.r2Buckets),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionR2BucketsMap",
        },
        services: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionServicesToHclTerraform)(struct.services),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionServicesMap",
        },
        usage_model: {
            value: cdktf.stringToHclTerraform(struct.usageModel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vectorize_bindings: {
            value: cdktf.hashMapperHcl(pagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform)(struct.vectorizeBindings),
            isBlock: true,
            type: "map",
            storageClassType: "PagesProjectDeploymentConfigsProductionVectorizeBindingsMap",
        },
        wrangler_config_hash: {
            value: cdktf.stringToHclTerraform(struct.wranglerConfigHash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._aiBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aiBindings = this._aiBindings?.internalValue;
        }
        if (this._alwaysUseLatestCompatibilityDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.alwaysUseLatestCompatibilityDate = this._alwaysUseLatestCompatibilityDate;
        }
        if (this._analyticsEngineDatasets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.analyticsEngineDatasets = this._analyticsEngineDatasets?.internalValue;
        }
        if (this._browsers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.browsers = this._browsers?.internalValue;
        }
        if (this._buildImageMajorVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildImageMajorVersion = this._buildImageMajorVersion;
        }
        if (this._compatibilityDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.compatibilityDate = this._compatibilityDate;
        }
        if (this._compatibilityFlags !== undefined) {
            hasAnyValues = true;
            internalValueResult.compatibilityFlags = this._compatibilityFlags;
        }
        if (this._d1Databases?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.d1Databases = this._d1Databases?.internalValue;
        }
        if (this._durableObjectNamespaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.durableObjectNamespaces = this._durableObjectNamespaces?.internalValue;
        }
        if (this._envVars?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.envVars = this._envVars?.internalValue;
        }
        if (this._failOpen !== undefined) {
            hasAnyValues = true;
            internalValueResult.failOpen = this._failOpen;
        }
        if (this._hyperdriveBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hyperdriveBindings = this._hyperdriveBindings?.internalValue;
        }
        if (this._kvNamespaces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kvNamespaces = this._kvNamespaces?.internalValue;
        }
        if (this._limits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limits = this._limits?.internalValue;
        }
        if (this._mtlsCertificates?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtlsCertificates = this._mtlsCertificates?.internalValue;
        }
        if (this._placement?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placement = this._placement?.internalValue;
        }
        if (this._queueProducers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueProducers = this._queueProducers?.internalValue;
        }
        if (this._r2Buckets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.r2Buckets = this._r2Buckets?.internalValue;
        }
        if (this._services?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.services = this._services?.internalValue;
        }
        if (this._usageModel !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageModel = this._usageModel;
        }
        if (this._vectorizeBindings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vectorizeBindings = this._vectorizeBindings?.internalValue;
        }
        if (this._wranglerConfigHash !== undefined) {
            hasAnyValues = true;
            internalValueResult.wranglerConfigHash = this._wranglerConfigHash;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aiBindings.internalValue = undefined;
            this._alwaysUseLatestCompatibilityDate = undefined;
            this._analyticsEngineDatasets.internalValue = undefined;
            this._browsers.internalValue = undefined;
            this._buildImageMajorVersion = undefined;
            this._compatibilityDate = undefined;
            this._compatibilityFlags = undefined;
            this._d1Databases.internalValue = undefined;
            this._durableObjectNamespaces.internalValue = undefined;
            this._envVars.internalValue = undefined;
            this._failOpen = undefined;
            this._hyperdriveBindings.internalValue = undefined;
            this._kvNamespaces.internalValue = undefined;
            this._limits.internalValue = undefined;
            this._mtlsCertificates.internalValue = undefined;
            this._placement.internalValue = undefined;
            this._queueProducers.internalValue = undefined;
            this._r2Buckets.internalValue = undefined;
            this._services.internalValue = undefined;
            this._usageModel = undefined;
            this._vectorizeBindings.internalValue = undefined;
            this._wranglerConfigHash = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aiBindings.internalValue = value.aiBindings;
            this._alwaysUseLatestCompatibilityDate = value.alwaysUseLatestCompatibilityDate;
            this._analyticsEngineDatasets.internalValue = value.analyticsEngineDatasets;
            this._browsers.internalValue = value.browsers;
            this._buildImageMajorVersion = value.buildImageMajorVersion;
            this._compatibilityDate = value.compatibilityDate;
            this._compatibilityFlags = value.compatibilityFlags;
            this._d1Databases.internalValue = value.d1Databases;
            this._durableObjectNamespaces.internalValue = value.durableObjectNamespaces;
            this._envVars.internalValue = value.envVars;
            this._failOpen = value.failOpen;
            this._hyperdriveBindings.internalValue = value.hyperdriveBindings;
            this._kvNamespaces.internalValue = value.kvNamespaces;
            this._limits.internalValue = value.limits;
            this._mtlsCertificates.internalValue = value.mtlsCertificates;
            this._placement.internalValue = value.placement;
            this._queueProducers.internalValue = value.queueProducers;
            this._r2Buckets.internalValue = value.r2Buckets;
            this._services.internalValue = value.services;
            this._usageModel = value.usageModel;
            this._vectorizeBindings.internalValue = value.vectorizeBindings;
            this._wranglerConfigHash = value.wranglerConfigHash;
        }
    }
    // ai_bindings - computed: true, optional: true, required: false
    _aiBindings = new PagesProjectDeploymentConfigsProductionAiBindingsMap(this, "ai_bindings");
    get aiBindings() {
        return this._aiBindings;
    }
    putAiBindings(value) {
        this._aiBindings.internalValue = value;
    }
    resetAiBindings() {
        this._aiBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aiBindingsInput() {
        return this._aiBindings.internalValue;
    }
    // always_use_latest_compatibility_date - computed: true, optional: true, required: false
    _alwaysUseLatestCompatibilityDate;
    get alwaysUseLatestCompatibilityDate() {
        return this.getBooleanAttribute('always_use_latest_compatibility_date');
    }
    set alwaysUseLatestCompatibilityDate(value) {
        this._alwaysUseLatestCompatibilityDate = value;
    }
    resetAlwaysUseLatestCompatibilityDate() {
        this._alwaysUseLatestCompatibilityDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get alwaysUseLatestCompatibilityDateInput() {
        return this._alwaysUseLatestCompatibilityDate;
    }
    // analytics_engine_datasets - computed: true, optional: true, required: false
    _analyticsEngineDatasets = new PagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
    get analyticsEngineDatasets() {
        return this._analyticsEngineDatasets;
    }
    putAnalyticsEngineDatasets(value) {
        this._analyticsEngineDatasets.internalValue = value;
    }
    resetAnalyticsEngineDatasets() {
        this._analyticsEngineDatasets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get analyticsEngineDatasetsInput() {
        return this._analyticsEngineDatasets.internalValue;
    }
    // browsers - computed: true, optional: true, required: false
    _browsers = new PagesProjectDeploymentConfigsProductionBrowsersMap(this, "browsers");
    get browsers() {
        return this._browsers;
    }
    putBrowsers(value) {
        this._browsers.internalValue = value;
    }
    resetBrowsers() {
        this._browsers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get browsersInput() {
        return this._browsers.internalValue;
    }
    // build_image_major_version - computed: true, optional: true, required: false
    _buildImageMajorVersion;
    get buildImageMajorVersion() {
        return this.getNumberAttribute('build_image_major_version');
    }
    set buildImageMajorVersion(value) {
        this._buildImageMajorVersion = value;
    }
    resetBuildImageMajorVersion() {
        this._buildImageMajorVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildImageMajorVersionInput() {
        return this._buildImageMajorVersion;
    }
    // compatibility_date - computed: true, optional: true, required: false
    _compatibilityDate;
    get compatibilityDate() {
        return this.getStringAttribute('compatibility_date');
    }
    set compatibilityDate(value) {
        this._compatibilityDate = value;
    }
    resetCompatibilityDate() {
        this._compatibilityDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityDateInput() {
        return this._compatibilityDate;
    }
    // compatibility_flags - computed: true, optional: true, required: false
    _compatibilityFlags;
    get compatibilityFlags() {
        return this.getListAttribute('compatibility_flags');
    }
    set compatibilityFlags(value) {
        this._compatibilityFlags = value;
    }
    resetCompatibilityFlags() {
        this._compatibilityFlags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityFlagsInput() {
        return this._compatibilityFlags;
    }
    // d1_databases - computed: true, optional: true, required: false
    _d1Databases = new PagesProjectDeploymentConfigsProductionD1DatabasesMap(this, "d1_databases");
    get d1Databases() {
        return this._d1Databases;
    }
    putD1Databases(value) {
        this._d1Databases.internalValue = value;
    }
    resetD1Databases() {
        this._d1Databases.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get d1DatabasesInput() {
        return this._d1Databases.internalValue;
    }
    // durable_object_namespaces - computed: true, optional: true, required: false
    _durableObjectNamespaces = new PagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(this, "durable_object_namespaces");
    get durableObjectNamespaces() {
        return this._durableObjectNamespaces;
    }
    putDurableObjectNamespaces(value) {
        this._durableObjectNamespaces.internalValue = value;
    }
    resetDurableObjectNamespaces() {
        this._durableObjectNamespaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durableObjectNamespacesInput() {
        return this._durableObjectNamespaces.internalValue;
    }
    // env_vars - computed: true, optional: true, required: false
    _envVars = new PagesProjectDeploymentConfigsProductionEnvVarsMap(this, "env_vars");
    get envVars() {
        return this._envVars;
    }
    putEnvVars(value) {
        this._envVars.internalValue = value;
    }
    resetEnvVars() {
        this._envVars.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get envVarsInput() {
        return this._envVars.internalValue;
    }
    // fail_open - computed: true, optional: true, required: false
    _failOpen;
    get failOpen() {
        return this.getBooleanAttribute('fail_open');
    }
    set failOpen(value) {
        this._failOpen = value;
    }
    resetFailOpen() {
        this._failOpen = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failOpenInput() {
        return this._failOpen;
    }
    // hyperdrive_bindings - computed: true, optional: true, required: false
    _hyperdriveBindings = new PagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(this, "hyperdrive_bindings");
    get hyperdriveBindings() {
        return this._hyperdriveBindings;
    }
    putHyperdriveBindings(value) {
        this._hyperdriveBindings.internalValue = value;
    }
    resetHyperdriveBindings() {
        this._hyperdriveBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hyperdriveBindingsInput() {
        return this._hyperdriveBindings.internalValue;
    }
    // kv_namespaces - computed: true, optional: true, required: false
    _kvNamespaces = new PagesProjectDeploymentConfigsProductionKvNamespacesMap(this, "kv_namespaces");
    get kvNamespaces() {
        return this._kvNamespaces;
    }
    putKvNamespaces(value) {
        this._kvNamespaces.internalValue = value;
    }
    resetKvNamespaces() {
        this._kvNamespaces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kvNamespacesInput() {
        return this._kvNamespaces.internalValue;
    }
    // limits - computed: true, optional: true, required: false
    _limits = new PagesProjectDeploymentConfigsProductionLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // mtls_certificates - computed: true, optional: true, required: false
    _mtlsCertificates = new PagesProjectDeploymentConfigsProductionMtlsCertificatesMap(this, "mtls_certificates");
    get mtlsCertificates() {
        return this._mtlsCertificates;
    }
    putMtlsCertificates(value) {
        this._mtlsCertificates.internalValue = value;
    }
    resetMtlsCertificates() {
        this._mtlsCertificates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mtlsCertificatesInput() {
        return this._mtlsCertificates.internalValue;
    }
    // placement - computed: true, optional: true, required: false
    _placement = new PagesProjectDeploymentConfigsProductionPlacementOutputReference(this, "placement");
    get placement() {
        return this._placement;
    }
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement.internalValue;
    }
    // queue_producers - computed: true, optional: true, required: false
    _queueProducers = new PagesProjectDeploymentConfigsProductionQueueProducersMap(this, "queue_producers");
    get queueProducers() {
        return this._queueProducers;
    }
    putQueueProducers(value) {
        this._queueProducers.internalValue = value;
    }
    resetQueueProducers() {
        this._queueProducers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueProducersInput() {
        return this._queueProducers.internalValue;
    }
    // r2_buckets - computed: true, optional: true, required: false
    _r2Buckets = new PagesProjectDeploymentConfigsProductionR2BucketsMap(this, "r2_buckets");
    get r2Buckets() {
        return this._r2Buckets;
    }
    putR2Buckets(value) {
        this._r2Buckets.internalValue = value;
    }
    resetR2Buckets() {
        this._r2Buckets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get r2BucketsInput() {
        return this._r2Buckets.internalValue;
    }
    // services - computed: true, optional: true, required: false
    _services = new PagesProjectDeploymentConfigsProductionServicesMap(this, "services");
    get services() {
        return this._services;
    }
    putServices(value) {
        this._services.internalValue = value;
    }
    resetServices() {
        this._services.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get servicesInput() {
        return this._services.internalValue;
    }
    // usage_model - computed: true, optional: true, required: false
    _usageModel;
    get usageModel() {
        return this.getStringAttribute('usage_model');
    }
    set usageModel(value) {
        this._usageModel = value;
    }
    resetUsageModel() {
        this._usageModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageModelInput() {
        return this._usageModel;
    }
    // vectorize_bindings - computed: true, optional: true, required: false
    _vectorizeBindings = new PagesProjectDeploymentConfigsProductionVectorizeBindingsMap(this, "vectorize_bindings");
    get vectorizeBindings() {
        return this._vectorizeBindings;
    }
    putVectorizeBindings(value) {
        this._vectorizeBindings.internalValue = value;
    }
    resetVectorizeBindings() {
        this._vectorizeBindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vectorizeBindingsInput() {
        return this._vectorizeBindings.internalValue;
    }
    // wrangler_config_hash - computed: true, optional: true, required: false
    _wranglerConfigHash;
    get wranglerConfigHash() {
        return this.getStringAttribute('wrangler_config_hash');
    }
    set wranglerConfigHash(value) {
        this._wranglerConfigHash = value;
    }
    resetWranglerConfigHash() {
        this._wranglerConfigHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get wranglerConfigHashInput() {
        return this._wranglerConfigHash;
    }
}
export function pagesProjectDeploymentConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        preview: pagesProjectDeploymentConfigsPreviewToTerraform(struct.preview),
        production: pagesProjectDeploymentConfigsProductionToTerraform(struct.production),
    };
}
export function pagesProjectDeploymentConfigsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        preview: {
            value: pagesProjectDeploymentConfigsPreviewToHclTerraform(struct.preview),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsPreview",
        },
        production: {
            value: pagesProjectDeploymentConfigsProductionToHclTerraform(struct.production),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectDeploymentConfigsProduction",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._preview?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preview = this._preview?.internalValue;
        }
        if (this._production?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.production = this._production?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._preview.internalValue = undefined;
            this._production.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._preview.internalValue = value.preview;
            this._production.internalValue = value.production;
        }
    }
    // preview - computed: true, optional: true, required: false
    _preview = new PagesProjectDeploymentConfigsPreviewOutputReference(this, "preview");
    get preview() {
        return this._preview;
    }
    putPreview(value) {
        this._preview.internalValue = value;
    }
    resetPreview() {
        this._preview.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewInput() {
        return this._preview.internalValue;
    }
    // production - computed: true, optional: true, required: false
    _production = new PagesProjectDeploymentConfigsProductionOutputReference(this, "production");
    get production() {
        return this._production;
    }
    putProduction(value) {
        this._production.internalValue = value;
    }
    resetProduction() {
        this._production.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productionInput() {
        return this._production.internalValue;
    }
}
export function pagesProjectLatestDeploymentBuildConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentBuildConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // build_caching - computed: true, optional: false, required: false
    get buildCaching() {
        return this.getBooleanAttribute('build_caching');
    }
    // build_command - computed: true, optional: false, required: false
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    // destination_dir - computed: true, optional: false, required: false
    get destinationDir() {
        return this.getStringAttribute('destination_dir');
    }
    // root_dir - computed: true, optional: false, required: false
    get rootDir() {
        return this.getStringAttribute('root_dir');
    }
    // web_analytics_tag - computed: true, optional: false, required: false
    get webAnalyticsTag() {
        return this.getStringAttribute('web_analytics_tag');
    }
    // web_analytics_token - computed: true, optional: false, required: false
    get webAnalyticsToken() {
        return this.getStringAttribute('web_analytics_token');
    }
}
export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // branch - computed: true, optional: false, required: false
    get branch() {
        return this.getStringAttribute('branch');
    }
    // commit_dirty - computed: true, optional: false, required: false
    get commitDirty() {
        return this.getBooleanAttribute('commit_dirty');
    }
    // commit_hash - computed: true, optional: false, required: false
    get commitHash() {
        return this.getStringAttribute('commit_hash');
    }
    // commit_message - computed: true, optional: false, required: false
    get commitMessage() {
        return this.getStringAttribute('commit_message');
    }
}
export function pagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // metadata - computed: true, optional: false, required: false
    _metadata = new PagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
    get metadata() {
        return this._metadata;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function pagesProjectLatestDeploymentEnvVarsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentEnvVarsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class PagesProjectLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new PagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export function pagesProjectLatestDeploymentLatestStageToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentLatestStageToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ended_on - computed: true, optional: false, required: false
    get endedOn() {
        return this.getStringAttribute('ended_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // started_on - computed: true, optional: false, required: false
    get startedOn() {
        return this.getStringAttribute('started_on');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export function pagesProjectLatestDeploymentSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // deployments_enabled - computed: true, optional: false, required: false
    get deploymentsEnabled() {
        return this.getBooleanAttribute('deployments_enabled');
    }
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // path_excludes - computed: true, optional: false, required: false
    get pathExcludes() {
        return this.getListAttribute('path_excludes');
    }
    // path_includes - computed: true, optional: false, required: false
    get pathIncludes() {
        return this.getListAttribute('path_includes');
    }
    // pr_comments_enabled - computed: true, optional: false, required: false
    get prCommentsEnabled() {
        return this.getBooleanAttribute('pr_comments_enabled');
    }
    // preview_branch_excludes - computed: true, optional: false, required: false
    get previewBranchExcludes() {
        return this.getListAttribute('preview_branch_excludes');
    }
    // preview_branch_includes - computed: true, optional: false, required: false
    get previewBranchIncludes() {
        return this.getListAttribute('preview_branch_includes');
    }
    // preview_deployment_setting - computed: true, optional: false, required: false
    get previewDeploymentSetting() {
        return this.getStringAttribute('preview_deployment_setting');
    }
    // production_branch - computed: true, optional: false, required: false
    get productionBranch() {
        return this.getStringAttribute('production_branch');
    }
    // production_deployments_enabled - computed: true, optional: false, required: false
    get productionDeploymentsEnabled() {
        return this.getBooleanAttribute('production_deployments_enabled');
    }
    // repo_id - computed: true, optional: false, required: false
    get repoId() {
        return this.getStringAttribute('repo_id');
    }
    // repo_name - computed: true, optional: false, required: false
    get repoName() {
        return this.getStringAttribute('repo_name');
    }
}
export function pagesProjectLatestDeploymentSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // config - computed: true, optional: false, required: false
    _config = new PagesProjectLatestDeploymentSourceConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export function pagesProjectLatestDeploymentStagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentStagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // ended_on - computed: true, optional: false, required: false
    get endedOn() {
        return this.getStringAttribute('ended_on');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // started_on - computed: true, optional: false, required: false
    get startedOn() {
        return this.getStringAttribute('started_on');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export class PagesProjectLatestDeploymentStagesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new PagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function pagesProjectLatestDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function pagesProjectLatestDeploymentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class PagesProjectLatestDeploymentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // aliases - computed: true, optional: false, required: false
    get aliases() {
        return this.getListAttribute('aliases');
    }
    // build_config - computed: true, optional: false, required: false
    _buildConfig = new PagesProjectLatestDeploymentBuildConfigOutputReference(this, "build_config");
    get buildConfig() {
        return this._buildConfig;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // deployment_trigger - computed: true, optional: false, required: false
    _deploymentTrigger = new PagesProjectLatestDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
    get deploymentTrigger() {
        return this._deploymentTrigger;
    }
    // env_vars - computed: true, optional: false, required: false
    _envVars = new PagesProjectLatestDeploymentEnvVarsMap(this, "env_vars");
    get envVars() {
        return this._envVars;
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getStringAttribute('environment');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_skipped - computed: true, optional: false, required: false
    get isSkipped() {
        return this.getBooleanAttribute('is_skipped');
    }
    // latest_stage - computed: true, optional: false, required: false
    _latestStage = new PagesProjectLatestDeploymentLatestStageOutputReference(this, "latest_stage");
    get latestStage() {
        return this._latestStage;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // project_id - computed: true, optional: false, required: false
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    // project_name - computed: true, optional: false, required: false
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    // short_id - computed: true, optional: false, required: false
    get shortId() {
        return this.getStringAttribute('short_id');
    }
    // source - computed: true, optional: false, required: false
    _source = new PagesProjectLatestDeploymentSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    // stages - computed: true, optional: false, required: false
    _stages = new PagesProjectLatestDeploymentStagesList(this, "stages", false);
    get stages() {
        return this._stages;
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // uses_functions - computed: true, optional: false, required: false
    get usesFunctions() {
        return this.getBooleanAttribute('uses_functions');
    }
}
export function pagesProjectSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deployments_enabled: cdktf.booleanToTerraform(struct.deploymentsEnabled),
        owner: cdktf.stringToTerraform(struct.owner),
        owner_id: cdktf.stringToTerraform(struct.ownerId),
        path_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pathExcludes),
        path_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.pathIncludes),
        pr_comments_enabled: cdktf.booleanToTerraform(struct.prCommentsEnabled),
        preview_branch_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.previewBranchExcludes),
        preview_branch_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.previewBranchIncludes),
        preview_deployment_setting: cdktf.stringToTerraform(struct.previewDeploymentSetting),
        production_branch: cdktf.stringToTerraform(struct.productionBranch),
        production_deployments_enabled: cdktf.booleanToTerraform(struct.productionDeploymentsEnabled),
        repo_id: cdktf.stringToTerraform(struct.repoId),
        repo_name: cdktf.stringToTerraform(struct.repoName),
    };
}
export function pagesProjectSourceConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        deployments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.deploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        owner: {
            value: cdktf.stringToHclTerraform(struct.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        owner_id: {
            value: cdktf.stringToHclTerraform(struct.ownerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path_excludes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pathExcludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        path_includes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.pathIncludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        pr_comments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.prCommentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preview_branch_excludes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.previewBranchExcludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        preview_branch_includes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.previewBranchIncludes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        preview_deployment_setting: {
            value: cdktf.stringToHclTerraform(struct.previewDeploymentSetting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        production_branch: {
            value: cdktf.stringToHclTerraform(struct.productionBranch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        production_deployments_enabled: {
            value: cdktf.booleanToHclTerraform(struct.productionDeploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        repo_id: {
            value: cdktf.stringToHclTerraform(struct.repoId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repo_name: {
            value: cdktf.stringToHclTerraform(struct.repoName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._deploymentsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.deploymentsEnabled = this._deploymentsEnabled;
        }
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._ownerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ownerId = this._ownerId;
        }
        if (this._pathExcludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathExcludes = this._pathExcludes;
        }
        if (this._pathIncludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathIncludes = this._pathIncludes;
        }
        if (this._prCommentsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.prCommentsEnabled = this._prCommentsEnabled;
        }
        if (this._previewBranchExcludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.previewBranchExcludes = this._previewBranchExcludes;
        }
        if (this._previewBranchIncludes !== undefined) {
            hasAnyValues = true;
            internalValueResult.previewBranchIncludes = this._previewBranchIncludes;
        }
        if (this._previewDeploymentSetting !== undefined) {
            hasAnyValues = true;
            internalValueResult.previewDeploymentSetting = this._previewDeploymentSetting;
        }
        if (this._productionBranch !== undefined) {
            hasAnyValues = true;
            internalValueResult.productionBranch = this._productionBranch;
        }
        if (this._productionDeploymentsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.productionDeploymentsEnabled = this._productionDeploymentsEnabled;
        }
        if (this._repoId !== undefined) {
            hasAnyValues = true;
            internalValueResult.repoId = this._repoId;
        }
        if (this._repoName !== undefined) {
            hasAnyValues = true;
            internalValueResult.repoName = this._repoName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deploymentsEnabled = undefined;
            this._owner = undefined;
            this._ownerId = undefined;
            this._pathExcludes = undefined;
            this._pathIncludes = undefined;
            this._prCommentsEnabled = undefined;
            this._previewBranchExcludes = undefined;
            this._previewBranchIncludes = undefined;
            this._previewDeploymentSetting = undefined;
            this._productionBranch = undefined;
            this._productionDeploymentsEnabled = undefined;
            this._repoId = undefined;
            this._repoName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deploymentsEnabled = value.deploymentsEnabled;
            this._owner = value.owner;
            this._ownerId = value.ownerId;
            this._pathExcludes = value.pathExcludes;
            this._pathIncludes = value.pathIncludes;
            this._prCommentsEnabled = value.prCommentsEnabled;
            this._previewBranchExcludes = value.previewBranchExcludes;
            this._previewBranchIncludes = value.previewBranchIncludes;
            this._previewDeploymentSetting = value.previewDeploymentSetting;
            this._productionBranch = value.productionBranch;
            this._productionDeploymentsEnabled = value.productionDeploymentsEnabled;
            this._repoId = value.repoId;
            this._repoName = value.repoName;
        }
    }
    // deployments_enabled - computed: true, optional: true, required: false
    _deploymentsEnabled;
    get deploymentsEnabled() {
        return this.getBooleanAttribute('deployments_enabled');
    }
    set deploymentsEnabled(value) {
        this._deploymentsEnabled = value;
    }
    resetDeploymentsEnabled() {
        this._deploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentsEnabledInput() {
        return this._deploymentsEnabled;
    }
    // owner - computed: true, optional: true, required: false
    _owner;
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // owner_id - computed: true, optional: true, required: false
    _ownerId;
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    set ownerId(value) {
        this._ownerId = value;
    }
    resetOwnerId() {
        this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerIdInput() {
        return this._ownerId;
    }
    // path_excludes - computed: true, optional: true, required: false
    _pathExcludes;
    get pathExcludes() {
        return this.getListAttribute('path_excludes');
    }
    set pathExcludes(value) {
        this._pathExcludes = value;
    }
    resetPathExcludes() {
        this._pathExcludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathExcludesInput() {
        return this._pathExcludes;
    }
    // path_includes - computed: true, optional: true, required: false
    _pathIncludes;
    get pathIncludes() {
        return this.getListAttribute('path_includes');
    }
    set pathIncludes(value) {
        this._pathIncludes = value;
    }
    resetPathIncludes() {
        this._pathIncludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pathIncludesInput() {
        return this._pathIncludes;
    }
    // pr_comments_enabled - computed: true, optional: true, required: false
    _prCommentsEnabled;
    get prCommentsEnabled() {
        return this.getBooleanAttribute('pr_comments_enabled');
    }
    set prCommentsEnabled(value) {
        this._prCommentsEnabled = value;
    }
    resetPrCommentsEnabled() {
        this._prCommentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prCommentsEnabledInput() {
        return this._prCommentsEnabled;
    }
    // preview_branch_excludes - computed: true, optional: true, required: false
    _previewBranchExcludes;
    get previewBranchExcludes() {
        return this.getListAttribute('preview_branch_excludes');
    }
    set previewBranchExcludes(value) {
        this._previewBranchExcludes = value;
    }
    resetPreviewBranchExcludes() {
        this._previewBranchExcludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewBranchExcludesInput() {
        return this._previewBranchExcludes;
    }
    // preview_branch_includes - computed: true, optional: true, required: false
    _previewBranchIncludes;
    get previewBranchIncludes() {
        return this.getListAttribute('preview_branch_includes');
    }
    set previewBranchIncludes(value) {
        this._previewBranchIncludes = value;
    }
    resetPreviewBranchIncludes() {
        this._previewBranchIncludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewBranchIncludesInput() {
        return this._previewBranchIncludes;
    }
    // preview_deployment_setting - computed: true, optional: true, required: false
    _previewDeploymentSetting;
    get previewDeploymentSetting() {
        return this.getStringAttribute('preview_deployment_setting');
    }
    set previewDeploymentSetting(value) {
        this._previewDeploymentSetting = value;
    }
    resetPreviewDeploymentSetting() {
        this._previewDeploymentSetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewDeploymentSettingInput() {
        return this._previewDeploymentSetting;
    }
    // production_branch - computed: true, optional: true, required: false
    _productionBranch;
    get productionBranch() {
        return this.getStringAttribute('production_branch');
    }
    set productionBranch(value) {
        this._productionBranch = value;
    }
    resetProductionBranch() {
        this._productionBranch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productionBranchInput() {
        return this._productionBranch;
    }
    // production_deployments_enabled - computed: true, optional: true, required: false
    _productionDeploymentsEnabled;
    get productionDeploymentsEnabled() {
        return this.getBooleanAttribute('production_deployments_enabled');
    }
    set productionDeploymentsEnabled(value) {
        this._productionDeploymentsEnabled = value;
    }
    resetProductionDeploymentsEnabled() {
        this._productionDeploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productionDeploymentsEnabledInput() {
        return this._productionDeploymentsEnabled;
    }
    // repo_id - computed: true, optional: true, required: false
    _repoId;
    get repoId() {
        return this.getStringAttribute('repo_id');
    }
    set repoId(value) {
        this._repoId = value;
    }
    resetRepoId() {
        this._repoId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get repoIdInput() {
        return this._repoId;
    }
    // repo_name - computed: true, optional: true, required: false
    _repoName;
    get repoName() {
        return this.getStringAttribute('repo_name');
    }
    set repoName(value) {
        this._repoName = value;
    }
    resetRepoName() {
        this._repoName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get repoNameInput() {
        return this._repoName;
    }
}
export function pagesProjectSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: pagesProjectSourceConfigToTerraform(struct.config),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function pagesProjectSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        config: {
            value: pagesProjectSourceConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "PagesProjectSourceConfig",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class PagesProjectSourceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.config = this._config?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._config.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._config.internalValue = value.config;
            this._type = value.type;
        }
    }
    // config - computed: false, optional: false, required: true
    _config = new PagesProjectSourceConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project}
*/
export class PagesProject extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_pages_project";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PagesProject to import
    * @param importFromId The id of the existing PagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PagesProject to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/pages_project cloudflare_pages_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PagesProjectConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_pages_project',
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
        });
        this._accountId = config.accountId;
        this._buildConfig.internalValue = config.buildConfig;
        this._deploymentConfigs.internalValue = config.deploymentConfigs;
        this._name = config.name;
        this._productionBranch = config.productionBranch;
        this._source.internalValue = config.source;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // build_config - computed: true, optional: true, required: false
    _buildConfig = new PagesProjectBuildConfigOutputReference(this, "build_config");
    get buildConfig() {
        return this._buildConfig;
    }
    putBuildConfig(value) {
        this._buildConfig.internalValue = value;
    }
    resetBuildConfig() {
        this._buildConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildConfigInput() {
        return this._buildConfig.internalValue;
    }
    // canonical_deployment - computed: true, optional: false, required: false
    _canonicalDeployment = new PagesProjectCanonicalDeploymentOutputReference(this, "canonical_deployment");
    get canonicalDeployment() {
        return this._canonicalDeployment;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // deployment_configs - computed: true, optional: true, required: false
    _deploymentConfigs = new PagesProjectDeploymentConfigsOutputReference(this, "deployment_configs");
    get deploymentConfigs() {
        return this._deploymentConfigs;
    }
    putDeploymentConfigs(value) {
        this._deploymentConfigs.internalValue = value;
    }
    resetDeploymentConfigs() {
        this._deploymentConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentConfigsInput() {
        return this._deploymentConfigs.internalValue;
    }
    // domains - computed: true, optional: false, required: false
    get domains() {
        return this.getListAttribute('domains');
    }
    // framework - computed: true, optional: false, required: false
    get framework() {
        return this.getStringAttribute('framework');
    }
    // framework_version - computed: true, optional: false, required: false
    get frameworkVersion() {
        return this.getStringAttribute('framework_version');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // latest_deployment - computed: true, optional: false, required: false
    _latestDeployment = new PagesProjectLatestDeploymentOutputReference(this, "latest_deployment");
    get latestDeployment() {
        return this._latestDeployment;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // preview_script_name - computed: true, optional: false, required: false
    get previewScriptName() {
        return this.getStringAttribute('preview_script_name');
    }
    // production_branch - computed: false, optional: false, required: true
    _productionBranch;
    get productionBranch() {
        return this.getStringAttribute('production_branch');
    }
    set productionBranch(value) {
        this._productionBranch = value;
    }
    // Temporarily expose input value. Use with caution.
    get productionBranchInput() {
        return this._productionBranch;
    }
    // production_script_name - computed: true, optional: false, required: false
    get productionScriptName() {
        return this.getStringAttribute('production_script_name');
    }
    // source - computed: false, optional: true, required: false
    _source = new PagesProjectSourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
    // subdomain - computed: true, optional: false, required: false
    get subdomain() {
        return this.getStringAttribute('subdomain');
    }
    // uses_functions - computed: true, optional: false, required: false
    get usesFunctions() {
        return this.getBooleanAttribute('uses_functions');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            build_config: pagesProjectBuildConfigToTerraform(this._buildConfig.internalValue),
            deployment_configs: pagesProjectDeploymentConfigsToTerraform(this._deploymentConfigs.internalValue),
            name: cdktf.stringToTerraform(this._name),
            production_branch: cdktf.stringToTerraform(this._productionBranch),
            source: pagesProjectSourceToTerraform(this._source.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            build_config: {
                value: pagesProjectBuildConfigToHclTerraform(this._buildConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectBuildConfig",
            },
            deployment_configs: {
                value: pagesProjectDeploymentConfigsToHclTerraform(this._deploymentConfigs.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectDeploymentConfigs",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            production_branch: {
                value: cdktf.stringToHclTerraform(this._productionBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: pagesProjectSourceToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "PagesProjectSource",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
