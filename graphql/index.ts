export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiField = Entry & {
  __typename?: 'ApiField';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ApiFieldLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  dataType?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDataTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDefaultValueArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldRequiredArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ApiFieldCollection = {
  __typename?: 'ApiFieldCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ApiField>>;
};

export type ApiFieldFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  dataType_exists?: Maybe<Scalars['Boolean']>;
  dataType?: Maybe<Scalars['String']>;
  dataType_not?: Maybe<Scalars['String']>;
  dataType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataType_contains?: Maybe<Scalars['String']>;
  dataType_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  required_exists?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  required_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ApiFieldFilter>>>;
  AND?: Maybe<Array<Maybe<ApiFieldFilter>>>;
};

export type ApiFieldLinkingCollections = {
  __typename?: 'ApiFieldLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ApiFieldLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ApiFieldOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DataTypeAsc = 'dataType_ASC',
  DataTypeDesc = 'dataType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTable = Entry & {
  __typename?: 'ApiTable';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ApiTableLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  apiFieldCollection?: Maybe<ApiTableApiFieldCollection>;
  apiReturnFieldCollection?: Maybe<ApiTableApiReturnFieldCollection>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableApiReturnFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ApiTableApiFieldCollection = {
  __typename?: 'ApiTableApiFieldCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type ApiTableApiReturnFieldCollection = {
  __typename?: 'ApiTableApiReturnFieldCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type ApiTableCollection = {
  __typename?: 'ApiTableCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ApiTable>>;
};

export type ApiTableFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  apiFieldCollection_exists?: Maybe<Scalars['Boolean']>;
  apiReturnFieldCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ApiTableFilter>>>;
  AND?: Maybe<Array<Maybe<ApiTableFilter>>>;
};

export type ApiTableLinkingCollections = {
  __typename?: 'ApiTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ApiTableLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ApiTableLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ApiTableLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ApiTableOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  contentBlockCollection?: Maybe<ContentBlockCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsContentBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlock = Entry & {
  __typename?: 'CodeBlock';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CodeBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<CodeBlockDescription>;
  filename?: Maybe<Scalars['String']>;
  sourceCode?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockFilenameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockSourceCodeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CodeBlock>>;
};

export type CodeBlockDescription = {
  __typename?: 'CodeBlockDescription';
  json: Scalars['JSON'];
  links: CodeBlockDescriptionLinks;
};

export type CodeBlockDescriptionAssets = {
  __typename?: 'CodeBlockDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CodeBlockDescriptionEntries = {
  __typename?: 'CodeBlockDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CodeBlockDescriptionLinks = {
  __typename?: 'CodeBlockDescriptionLinks';
  entries: CodeBlockDescriptionEntries;
  assets: CodeBlockDescriptionAssets;
};

export type CodeBlockFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  filename_exists?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  filename_not?: Maybe<Scalars['String']>;
  filename_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename_contains?: Maybe<Scalars['String']>;
  filename_not_contains?: Maybe<Scalars['String']>;
  sourceCode_exists?: Maybe<Scalars['Boolean']>;
  sourceCode?: Maybe<Scalars['String']>;
  sourceCode_not?: Maybe<Scalars['String']>;
  sourceCode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceCode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceCode_contains?: Maybe<Scalars['String']>;
  sourceCode_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CodeBlockFilter>>>;
  AND?: Maybe<Array<Maybe<CodeBlockFilter>>>;
};

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CodeBlockLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CodeBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CodeBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlock = Entry & {
  __typename?: 'ContentBlock';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlockLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<ContentBlockDescription>;
  image?: Maybe<Asset>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ContentBlock>>;
};

export type ContentBlockDescription = {
  __typename?: 'ContentBlockDescription';
  json: Scalars['JSON'];
  links: ContentBlockDescriptionLinks;
};

export type ContentBlockDescriptionAssets = {
  __typename?: 'ContentBlockDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type ContentBlockDescriptionEntries = {
  __typename?: 'ContentBlockDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ContentBlockDescriptionLinks = {
  __typename?: 'ContentBlockDescriptionLinks';
  entries: ContentBlockDescriptionEntries;
  assets: ContentBlockDescriptionAssets;
};

export type ContentBlockFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ContentBlockFilter>>>;
  AND?: Maybe<Array<Maybe<ContentBlockFilter>>>;
};

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentBlockLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum ContentBlockOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type Hero = Entry & {
  __typename?: 'Hero';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Hero>>;
};

export type HeroFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<HeroFilter>>>;
  AND?: Maybe<Array<Maybe<HeroFilter>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type HeroLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HeroOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomepageLinkingCollections>;
  heroHeading?: Maybe<Scalars['String']>;
  heroSubHeading?: Maybe<Scalars['String']>;
  heroButtons?: Maybe<Scalars['JSON']>;
  section1Heading?: Maybe<Scalars['String']>;
  section1SubHeading?: Maybe<Scalars['String']>;
  section1CardsCollection?: Maybe<HomepageSection1CardsCollection>;
  section2Heading?: Maybe<Scalars['String']>;
  section2SubHeading?: Maybe<Scalars['String']>;
  section2Buttons?: Maybe<Scalars['JSON']>;
  section3Heading?: Maybe<Scalars['String']>;
  section3SubHeading?: Maybe<Scalars['String']>;
  section3CardsCollection?: Maybe<HomepageSection3CardsCollection>;
  section4Heading?: Maybe<Scalars['String']>;
  section4SubHeading?: Maybe<Scalars['String']>;
  section4Buttons?: Maybe<Scalars['JSON']>;
  section5Heading?: Maybe<Scalars['String']>;
  section5SubHeading?: Maybe<Scalars['String']>;
  section5Buttons?: Maybe<Scalars['JSON']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroSubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroButtonsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1HeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1SubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1CardsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2HeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2SubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2ButtonsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3HeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3SubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3CardsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4HeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4SubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4ButtonsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5HeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5SubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5ButtonsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Homepage>>;
};

export type HomepageFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  heroHeading_exists?: Maybe<Scalars['Boolean']>;
  heroHeading?: Maybe<Scalars['String']>;
  heroHeading_not?: Maybe<Scalars['String']>;
  heroHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroHeading_contains?: Maybe<Scalars['String']>;
  heroHeading_not_contains?: Maybe<Scalars['String']>;
  heroSubHeading_exists?: Maybe<Scalars['Boolean']>;
  heroSubHeading?: Maybe<Scalars['String']>;
  heroSubHeading_not?: Maybe<Scalars['String']>;
  heroSubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroSubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroSubHeading_contains?: Maybe<Scalars['String']>;
  heroSubHeading_not_contains?: Maybe<Scalars['String']>;
  section1Heading_exists?: Maybe<Scalars['Boolean']>;
  section1Heading?: Maybe<Scalars['String']>;
  section1Heading_not?: Maybe<Scalars['String']>;
  section1Heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section1Heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section1Heading_contains?: Maybe<Scalars['String']>;
  section1Heading_not_contains?: Maybe<Scalars['String']>;
  section1SubHeading_exists?: Maybe<Scalars['Boolean']>;
  section1SubHeading?: Maybe<Scalars['String']>;
  section1SubHeading_not?: Maybe<Scalars['String']>;
  section1SubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section1SubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section1SubHeading_contains?: Maybe<Scalars['String']>;
  section1SubHeading_not_contains?: Maybe<Scalars['String']>;
  section1CardsCollection_exists?: Maybe<Scalars['Boolean']>;
  section2Heading_exists?: Maybe<Scalars['Boolean']>;
  section2Heading?: Maybe<Scalars['String']>;
  section2Heading_not?: Maybe<Scalars['String']>;
  section2Heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section2Heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section2Heading_contains?: Maybe<Scalars['String']>;
  section2Heading_not_contains?: Maybe<Scalars['String']>;
  section2SubHeading_exists?: Maybe<Scalars['Boolean']>;
  section2SubHeading?: Maybe<Scalars['String']>;
  section2SubHeading_not?: Maybe<Scalars['String']>;
  section2SubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section2SubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section2SubHeading_contains?: Maybe<Scalars['String']>;
  section2SubHeading_not_contains?: Maybe<Scalars['String']>;
  section3Heading_exists?: Maybe<Scalars['Boolean']>;
  section3Heading?: Maybe<Scalars['String']>;
  section3Heading_not?: Maybe<Scalars['String']>;
  section3Heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section3Heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section3Heading_contains?: Maybe<Scalars['String']>;
  section3Heading_not_contains?: Maybe<Scalars['String']>;
  section3SubHeading_exists?: Maybe<Scalars['Boolean']>;
  section3SubHeading?: Maybe<Scalars['String']>;
  section3SubHeading_not?: Maybe<Scalars['String']>;
  section3SubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section3SubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section3SubHeading_contains?: Maybe<Scalars['String']>;
  section3SubHeading_not_contains?: Maybe<Scalars['String']>;
  section3CardsCollection_exists?: Maybe<Scalars['Boolean']>;
  section4Heading_exists?: Maybe<Scalars['Boolean']>;
  section4Heading?: Maybe<Scalars['String']>;
  section4Heading_not?: Maybe<Scalars['String']>;
  section4Heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section4Heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section4Heading_contains?: Maybe<Scalars['String']>;
  section4Heading_not_contains?: Maybe<Scalars['String']>;
  section4SubHeading_exists?: Maybe<Scalars['Boolean']>;
  section4SubHeading?: Maybe<Scalars['String']>;
  section4SubHeading_not?: Maybe<Scalars['String']>;
  section4SubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section4SubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section4SubHeading_contains?: Maybe<Scalars['String']>;
  section4SubHeading_not_contains?: Maybe<Scalars['String']>;
  section5Heading_exists?: Maybe<Scalars['Boolean']>;
  section5Heading?: Maybe<Scalars['String']>;
  section5Heading_not?: Maybe<Scalars['String']>;
  section5Heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section5Heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section5Heading_contains?: Maybe<Scalars['String']>;
  section5Heading_not_contains?: Maybe<Scalars['String']>;
  section5SubHeading_exists?: Maybe<Scalars['Boolean']>;
  section5SubHeading?: Maybe<Scalars['String']>;
  section5SubHeading_not?: Maybe<Scalars['String']>;
  section5SubHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section5SubHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  section5SubHeading_contains?: Maybe<Scalars['String']>;
  section5SubHeading_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<HomepageFilter>>>;
  AND?: Maybe<Array<Maybe<HomepageFilter>>>;
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HomepageOrder {
  HeroHeadingAsc = 'heroHeading_ASC',
  HeroHeadingDesc = 'heroHeading_DESC',
  HeroSubHeadingAsc = 'heroSubHeading_ASC',
  HeroSubHeadingDesc = 'heroSubHeading_DESC',
  Section1HeadingAsc = 'section1Heading_ASC',
  Section1HeadingDesc = 'section1Heading_DESC',
  Section1SubHeadingAsc = 'section1SubHeading_ASC',
  Section1SubHeadingDesc = 'section1SubHeading_DESC',
  Section2HeadingAsc = 'section2Heading_ASC',
  Section2HeadingDesc = 'section2Heading_DESC',
  Section2SubHeadingAsc = 'section2SubHeading_ASC',
  Section2SubHeadingDesc = 'section2SubHeading_DESC',
  Section3HeadingAsc = 'section3Heading_ASC',
  Section3HeadingDesc = 'section3Heading_DESC',
  Section3SubHeadingAsc = 'section3SubHeading_ASC',
  Section3SubHeadingDesc = 'section3SubHeading_DESC',
  Section4HeadingAsc = 'section4Heading_ASC',
  Section4HeadingDesc = 'section4Heading_DESC',
  Section4SubHeadingAsc = 'section4SubHeading_ASC',
  Section4SubHeadingDesc = 'section4SubHeading_DESC',
  Section5HeadingAsc = 'section5Heading_ASC',
  Section5HeadingDesc = 'section5Heading_DESC',
  Section5SubHeadingAsc = 'section5SubHeading_ASC',
  Section5SubHeadingDesc = 'section5SubHeading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomepageSection1CardsCollection = {
  __typename?: 'HomepageSection1CardsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type HomepageSection3CardsCollection = {
  __typename?: 'HomepageSection3CardsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SimpleCard>>;
};

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExample = Entry & {
  __typename?: 'LiveExample';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LiveExampleLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<LiveExampleDescription>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type LiveExampleCollection = {
  __typename?: 'LiveExampleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<LiveExample>>;
};

export type LiveExampleDescription = {
  __typename?: 'LiveExampleDescription';
  json: Scalars['JSON'];
  links: LiveExampleDescriptionLinks;
};

export type LiveExampleDescriptionAssets = {
  __typename?: 'LiveExampleDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type LiveExampleDescriptionEntries = {
  __typename?: 'LiveExampleDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type LiveExampleDescriptionLinks = {
  __typename?: 'LiveExampleDescriptionLinks';
  entries: LiveExampleDescriptionEntries;
  assets: LiveExampleDescriptionAssets;
};

export type LiveExampleFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<LiveExampleFilter>>>;
  AND?: Maybe<Array<Maybe<LiveExampleFilter>>>;
};

export type LiveExampleLinkingCollections = {
  __typename?: 'LiveExampleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type LiveExampleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LiveExampleLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type LiveExampleLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum LiveExampleOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTable = Entry & {
  __typename?: 'MarkdownTable';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MarkdownTableLinkingCollections>;
  markdown?: Maybe<Scalars['String']>;
};


/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTableLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTableMarkdownArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownTableCollection = {
  __typename?: 'MarkdownTableCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<MarkdownTable>>;
};

export type MarkdownTableFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  markdown_exists?: Maybe<Scalars['Boolean']>;
  markdown?: Maybe<Scalars['String']>;
  markdown_not?: Maybe<Scalars['String']>;
  markdown_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdown_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  markdown_contains?: Maybe<Scalars['String']>;
  markdown_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<MarkdownTableFilter>>>;
  AND?: Maybe<Array<Maybe<MarkdownTableFilter>>>;
};

export type MarkdownTableLinkingCollections = {
  __typename?: 'MarkdownTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MarkdownTableLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum MarkdownTableOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  childrenCollection?: Maybe<NavigationChildrenCollection>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationChildrenCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type NavigationChildrenCollection = {
  __typename?: 'NavigationChildrenCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavigationElement>>;
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Navigation>>;
};

/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElement = Entry & {
  __typename?: 'NavigationElement';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationElementLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  externalUri?: Maybe<Scalars['String']>;
  page?: Maybe<NavigationElementPage>;
  childrenCollection?: Maybe<NavigationElementChildrenCollection>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementPathArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementExternalUriArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementPageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementChildrenCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type NavigationElementChildrenCollection = {
  __typename?: 'NavigationElementChildrenCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavigationElement>>;
};

export type NavigationElementCollection = {
  __typename?: 'NavigationElementCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavigationElement>>;
};

export type NavigationElementFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  path_exists?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  path_not?: Maybe<Scalars['String']>;
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  path_contains?: Maybe<Scalars['String']>;
  path_not_contains?: Maybe<Scalars['String']>;
  externalUri_exists?: Maybe<Scalars['Boolean']>;
  externalUri?: Maybe<Scalars['String']>;
  externalUri_not?: Maybe<Scalars['String']>;
  externalUri_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  externalUri_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  externalUri_contains?: Maybe<Scalars['String']>;
  externalUri_not_contains?: Maybe<Scalars['String']>;
  page_exists?: Maybe<Scalars['Boolean']>;
  childrenCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<NavigationElementFilter>>>;
  AND?: Maybe<Array<Maybe<NavigationElementFilter>>>;
};

export type NavigationElementLinkingCollections = {
  __typename?: 'NavigationElementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
};


export type NavigationElementLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type NavigationElementLinkingCollectionsNavigationElementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type NavigationElementLinkingCollectionsNavigationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum NavigationElementOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  ExternalUriAsc = 'externalUri_ASC',
  ExternalUriDesc = 'externalUri_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationElementPage = Page;

export type NavigationFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  childrenCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<NavigationFilter>>>;
  AND?: Maybe<Array<Maybe<NavigationFilter>>>;
};

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum NavigationOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  sectionCollection?: Maybe<PageSectionCollection>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Page>>;
};

export type PageFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  sectionCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageFilter>>>;
  AND?: Maybe<Array<Maybe<PageFilter>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PageLinkingCollectionsNavigationElementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageSectionItem>>;
};

export type PageSectionItem = ApiTable | CodeBlock | ContentBlock | Hero | LiveExample | Section;


export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  swatchColour?: Maybe<SwatchColour>;
  swatchColourCollection?: Maybe<SwatchColourCollection>;
  swatch?: Maybe<Swatch>;
  swatchCollection?: Maybe<SwatchCollection>;
  markdownTable?: Maybe<MarkdownTable>;
  markdownTableCollection?: Maybe<MarkdownTableCollection>;
  simpleCard?: Maybe<SimpleCard>;
  simpleCardCollection?: Maybe<SimpleCardCollection>;
  homepage?: Maybe<Homepage>;
  homepageCollection?: Maybe<HomepageCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  navigationElement?: Maybe<NavigationElement>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  apiField?: Maybe<ApiField>;
  apiFieldCollection?: Maybe<ApiFieldCollection>;
  apiTable?: Maybe<ApiTable>;
  apiTableCollection?: Maybe<ApiTableCollection>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlockCollection?: Maybe<ContentBlockCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  codeBlock?: Maybe<CodeBlock>;
  codeBlockCollection?: Maybe<CodeBlockCollection>;
  liveExample?: Maybe<LiveExample>;
  liveExampleCollection?: Maybe<LiveExampleCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QuerySwatchColourArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySwatchColourCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SwatchColourFilter>;
  order?: Maybe<Array<Maybe<SwatchColourOrder>>>;
};


export type QuerySwatchArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySwatchCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SwatchFilter>;
  order?: Maybe<Array<Maybe<SwatchOrder>>>;
};


export type QueryMarkdownTableArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMarkdownTableCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MarkdownTableFilter>;
  order?: Maybe<Array<Maybe<MarkdownTableOrder>>>;
};


export type QuerySimpleCardArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySimpleCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SimpleCardFilter>;
  order?: Maybe<Array<Maybe<SimpleCardOrder>>>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHomepageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HomepageFilter>;
  order?: Maybe<Array<Maybe<HomepageOrder>>>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageFilter>;
  order?: Maybe<Array<Maybe<PageOrder>>>;
};


export type QueryNavigationElementArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryNavigationElementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavigationElementFilter>;
  order?: Maybe<Array<Maybe<NavigationElementOrder>>>;
};


export type QueryNavigationArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryNavigationCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavigationFilter>;
  order?: Maybe<Array<Maybe<NavigationOrder>>>;
};


export type QueryApiFieldArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ApiFieldFilter>;
  order?: Maybe<Array<Maybe<ApiFieldOrder>>>;
};


export type QueryApiTableArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryApiTableCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ApiTableFilter>;
  order?: Maybe<Array<Maybe<ApiTableOrder>>>;
};


export type QueryContentBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryContentBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ContentBlockFilter>;
  order?: Maybe<Array<Maybe<ContentBlockOrder>>>;
};


export type QueryHeroArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHeroCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HeroFilter>;
  order?: Maybe<Array<Maybe<HeroOrder>>>;
};


export type QuerySectionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SectionFilter>;
  order?: Maybe<Array<Maybe<SectionOrder>>>;
};


export type QueryCodeBlockArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCodeBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CodeBlockFilter>;
  order?: Maybe<Array<Maybe<CodeBlockOrder>>>;
};


export type QueryLiveExampleArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLiveExampleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<LiveExampleFilter>;
  order?: Maybe<Array<Maybe<LiveExampleOrder>>>;
};


export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type Section = Entry & {
  __typename?: 'Section';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  contentCollection?: Maybe<SectionContentCollection>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionContentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Section>>;
};

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SectionContentItem>>;
};

export type SectionContentItem = ApiTable | CodeBlock | ContentBlock | Hero | LiveExample;

export type SectionFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  contentCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SectionFilter>>>;
  AND?: Maybe<Array<Maybe<SectionFilter>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SectionLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SectionOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCard = Entry & {
  __typename?: 'SimpleCard';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SimpleCardLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  titleColor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  buttonHref?: Maybe<Scalars['String']>;
  buttonTitle?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardTitleColorArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardButtonHrefArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardButtonTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SimpleCardCollection = {
  __typename?: 'SimpleCardCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SimpleCard>>;
};

export type SimpleCardFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  titleColor_exists?: Maybe<Scalars['Boolean']>;
  titleColor?: Maybe<Scalars['String']>;
  titleColor_not?: Maybe<Scalars['String']>;
  titleColor_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  titleColor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  titleColor_contains?: Maybe<Scalars['String']>;
  titleColor_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  buttonHref_exists?: Maybe<Scalars['Boolean']>;
  buttonHref?: Maybe<Scalars['String']>;
  buttonHref_not?: Maybe<Scalars['String']>;
  buttonHref_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonHref_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonHref_contains?: Maybe<Scalars['String']>;
  buttonHref_not_contains?: Maybe<Scalars['String']>;
  buttonTitle_exists?: Maybe<Scalars['Boolean']>;
  buttonTitle?: Maybe<Scalars['String']>;
  buttonTitle_not?: Maybe<Scalars['String']>;
  buttonTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonTitle_contains?: Maybe<Scalars['String']>;
  buttonTitle_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SimpleCardFilter>>>;
  AND?: Maybe<Array<Maybe<SimpleCardFilter>>>;
};

export type SimpleCardLinkingCollections = {
  __typename?: 'SimpleCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type SimpleCardLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SimpleCardLinkingCollectionsHomepageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SimpleCardOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TitleColorAsc = 'titleColor_ASC',
  TitleColorDesc = 'titleColor_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ButtonHrefAsc = 'buttonHref_ASC',
  ButtonHrefDesc = 'buttonHref_DESC',
  ButtonTitleAsc = 'buttonTitle_ASC',
  ButtonTitleDesc = 'buttonTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type Swatch = Entry & {
  __typename?: 'Swatch';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SwatchLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  colourCollection?: Maybe<SwatchColourCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchColourCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SwatchCollection = {
  __typename?: 'SwatchCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Swatch>>;
};

/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColour = Entry & {
  __typename?: 'SwatchColour';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SwatchColourLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  colour?: Maybe<Scalars['String']>;
  isDark?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourColourArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourIsDarkArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type SwatchColourCollection = {
  __typename?: 'SwatchColourCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SwatchColour>>;
};

export type SwatchColourFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  colour_exists?: Maybe<Scalars['Boolean']>;
  colour?: Maybe<Scalars['String']>;
  colour_not?: Maybe<Scalars['String']>;
  colour_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  colour_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  colour_contains?: Maybe<Scalars['String']>;
  colour_not_contains?: Maybe<Scalars['String']>;
  isDark_exists?: Maybe<Scalars['Boolean']>;
  isDark?: Maybe<Scalars['Boolean']>;
  isDark_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SwatchColourFilter>>>;
  AND?: Maybe<Array<Maybe<SwatchColourFilter>>>;
};

export type SwatchColourLinkingCollections = {
  __typename?: 'SwatchColourLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SwatchColourLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SwatchColourOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ColourAsc = 'colour_ASC',
  ColourDesc = 'colour_DESC',
  IsDarkAsc = 'isDark_ASC',
  IsDarkDesc = 'isDark_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SwatchFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  colourCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SwatchFilter>>>;
  AND?: Maybe<Array<Maybe<SwatchFilter>>>;
};

export type SwatchLinkingCollections = {
  __typename?: 'SwatchLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SwatchLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum SwatchOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type HomepageByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type HomepageByIdQuery = (
  { __typename?: 'Query' }
  & { homepage?: Maybe<(
    { __typename?: 'Homepage' }
    & Pick<Homepage, 'heroHeading' | 'heroSubHeading' | 'heroButtons' | 'section1Heading' | 'section1SubHeading' | 'section2Heading' | 'section2SubHeading' | 'section2Buttons' | 'section3Heading' | 'section3SubHeading' | 'section4Heading' | 'section4SubHeading' | 'section4Buttons' | 'section5Heading' | 'section5SubHeading' | 'section5Buttons'>
    & { section3CardsCollection?: Maybe<(
      { __typename?: 'HomepageSection3CardsCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'SimpleCard' }
        & Pick<SimpleCard, 'title' | 'titleColor' | 'description' | 'buttonHref' | 'buttonTitle'>
      )>> }
    )> }
  )> }
);

export type NavigationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NavigationByIdQuery = (
  { __typename?: 'Query' }
  & { navigation?: Maybe<(
    { __typename?: 'Navigation' }
    & Pick<Navigation, 'title'>
    & { childrenCollection?: Maybe<(
      { __typename?: 'NavigationChildrenCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'NavigationElement' }
        & Pick<NavigationElement, 'title' | 'path' | 'externalUri'>
        & { page?: Maybe<(
          { __typename?: 'Page' }
          & { sys: (
            { __typename?: 'Sys' }
            & Pick<Sys, 'id'>
          ) }
        )>, childrenCollection?: Maybe<(
          { __typename?: 'NavigationElementChildrenCollection' }
          & { items: Array<Maybe<(
            { __typename?: 'NavigationElement' }
            & Pick<NavigationElement, 'title' | 'path' | 'externalUri'>
            & { page?: Maybe<(
              { __typename?: 'Page' }
              & { sys: (
                { __typename?: 'Sys' }
                & Pick<Sys, 'id'>
              ) }
            )> }
          )>> }
        )> }
      )>> }
    )> }
  )> }
);

export type NavigationElementsFlatQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationElementsFlatQuery = (
  { __typename?: 'Query' }
  & { navigationElementCollection?: Maybe<(
    { __typename?: 'NavigationElementCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'NavigationElement' }
      & Pick<NavigationElement, 'title' | 'path' | 'externalUri'>
      & { page?: Maybe<(
        { __typename?: 'Page' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      )> }
    )>> }
  )> }
);

export type PageByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type PageByPathQuery = (
  { __typename?: 'Query' }
  & { navigationElementCollection?: Maybe<(
    { __typename?: 'NavigationElementCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'NavigationElement' }
      & Pick<NavigationElement, 'title' | 'path' | 'externalUri'>
      & { childrenCollection?: Maybe<(
        { __typename?: 'NavigationElementChildrenCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'NavigationElement' }
          & Pick<NavigationElement, 'title' | 'path' | 'externalUri'>
          & { contentfulMetadata: (
            { __typename?: 'ContentfulMetadata' }
            & { tags: Array<Maybe<(
              { __typename?: 'ContentfulTag' }
              & Pick<ContentfulTag, 'id' | 'name'>
            )>> }
          ) }
        )>> }
      )>, page?: Maybe<(
        { __typename?: 'Page' }
        & Pick<Page, 'title'>
        & { sectionCollection?: Maybe<(
          { __typename?: 'PageSectionCollection' }
          & { items: Array<Maybe<(
            { __typename: 'ApiTable' }
            & Pick<ApiTable, 'title'>
            & { apiTableDescription: ApiTable['description'] }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ), apiFieldCollection?: Maybe<(
              { __typename?: 'ApiTableApiFieldCollection' }
              & { items: Array<Maybe<(
                { __typename?: 'ApiField' }
                & Pick<ApiField, 'name' | 'dataType' | 'defaultValue' | 'description' | 'required'>
              ) | { __typename?: 'ApiTable' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' }>> }
            )>, apiReturnFieldCollection?: Maybe<(
              { __typename?: 'ApiTableApiReturnFieldCollection' }
              & { items: Array<Maybe<(
                { __typename?: 'ApiField' }
                & Pick<ApiField, 'name' | 'dataType' | 'defaultValue' | 'description' | 'required'>
              ) | { __typename?: 'ApiTable' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' }>> }
            )> }
          ) | (
            { __typename: 'CodeBlock' }
            & Pick<CodeBlock, 'title' | 'filename' | 'sourceCode'>
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ), description?: Maybe<(
              { __typename?: 'CodeBlockDescription' }
              & Pick<CodeBlockDescription, 'json'>
            )> }
          ) | (
            { __typename: 'ContentBlock' }
            & Pick<ContentBlock, 'title'>
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ), description?: Maybe<(
              { __typename?: 'ContentBlockDescription' }
              & Pick<ContentBlockDescription, 'json'>
              & { links: (
                { __typename?: 'ContentBlockDescriptionLinks' }
                & { assets: (
                  { __typename?: 'ContentBlockDescriptionAssets' }
                  & { block: Array<Maybe<(
                    { __typename?: 'Asset' }
                    & Pick<Asset, 'fileName' | 'title' | 'description' | 'url' | 'width' | 'height'>
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  )>> }
                ), entries: (
                  { __typename?: 'ContentBlockDescriptionEntries' }
                  & { block: Array<Maybe<(
                    { __typename: 'ApiField' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'ApiTable' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'CodeBlock' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'ContentBlock' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Hero' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Homepage' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'LiveExample' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'MarkdownTable' }
                    & Pick<MarkdownTable, 'markdown'>
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Navigation' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'NavigationElement' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Page' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Section' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'SimpleCard' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Swatch' }
                    & { colourCollection?: Maybe<(
                      { __typename?: 'SwatchColourCollection' }
                      & { items: Array<Maybe<(
                        { __typename?: 'SwatchColour' }
                        & Pick<SwatchColour, 'name' | 'colour' | 'isDark'>
                      )>> }
                    )>, sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'SwatchColour' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  )>>, inline: Array<Maybe<(
                    { __typename: 'ApiField' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'ApiTable' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'CodeBlock' }
                    & Pick<CodeBlock, 'sourceCode'>
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'ContentBlock' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Hero' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Homepage' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'LiveExample' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'MarkdownTable' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Navigation' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'NavigationElement' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Page' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Section' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'SimpleCard' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'Swatch' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  ) | (
                    { __typename: 'SwatchColour' }
                    & { sys: (
                      { __typename?: 'Sys' }
                      & Pick<Sys, 'id'>
                    ) }
                  )>> }
                ) }
              ) }
            )>, image?: Maybe<(
              { __typename?: 'Asset' }
              & Pick<Asset, 'title' | 'url'>
            )> }
          ) | (
            { __typename: 'Hero' }
            & Pick<Hero, 'title' | 'heading'>
            & { heroDescription: Hero['description'] }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'LiveExample' }
            & Pick<LiveExample, 'title'>
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ), description?: Maybe<(
              { __typename?: 'LiveExampleDescription' }
              & Pick<LiveExampleDescription, 'json'>
            )> }
          ) | (
            { __typename: 'Section' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);

export type PageStructureQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageStructureQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'title'>
    & { sectionCollection?: Maybe<(
      { __typename?: 'PageSectionCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'ApiTable' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename?: 'CodeBlock' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename?: 'ContentBlock' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename?: 'Hero' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename?: 'LiveExample' }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename?: 'Section' }
        & Pick<Section, 'title'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), contentCollection?: Maybe<(
          { __typename?: 'SectionContentCollection' }
          & { items: Array<Maybe<(
            { __typename: 'ApiTable' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'CodeBlock' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'ContentBlock' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'Hero' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          ) | (
            { __typename: 'LiveExample' }
            & { sys: (
              { __typename?: 'Sys' }
              & Pick<Sys, 'id'>
            ) }
          )>> }
        )> }
      )>> }
    )> }
  )> }
);

export type SectionContentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SectionContentQuery = (
  { __typename?: 'Query' }
  & { section?: Maybe<(
    { __typename?: 'Section' }
    & Pick<Section, 'title'>
    & { contentCollection?: Maybe<(
      { __typename?: 'SectionContentCollection' }
      & { items: Array<Maybe<(
        { __typename: 'ApiTable' }
        & Pick<ApiTable, 'title'>
        & { apiTableDescription: ApiTable['description'] }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), apiFieldCollection?: Maybe<(
          { __typename?: 'ApiTableApiFieldCollection' }
          & { items: Array<Maybe<(
            { __typename?: 'ApiField' }
            & Pick<ApiField, 'name' | 'dataType' | 'defaultValue' | 'description' | 'required'>
          ) | { __typename?: 'ApiTable' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' }>> }
        )>, apiReturnFieldCollection?: Maybe<(
          { __typename?: 'ApiTableApiReturnFieldCollection' }
          & { items: Array<Maybe<(
            { __typename?: 'ApiField' }
            & Pick<ApiField, 'name' | 'dataType' | 'defaultValue' | 'description' | 'required'>
          ) | { __typename?: 'ApiTable' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' }>> }
        )> }
      ) | (
        { __typename: 'CodeBlock' }
        & Pick<CodeBlock, 'title' | 'filename' | 'sourceCode'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'CodeBlockDescription' }
          & Pick<CodeBlockDescription, 'json'>
        )> }
      ) | (
        { __typename: 'ContentBlock' }
        & Pick<ContentBlock, 'title'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'ContentBlockDescription' }
          & Pick<ContentBlockDescription, 'json'>
        )>, image?: Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'title' | 'url'>
        )> }
      ) | (
        { __typename: 'Hero' }
        & Pick<Hero, 'title' | 'heading'>
        & { heroDescription: Hero['description'] }
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ) }
      ) | (
        { __typename: 'LiveExample' }
        & Pick<LiveExample, 'title'>
        & { sys: (
          { __typename?: 'Sys' }
          & Pick<Sys, 'id'>
        ), description?: Maybe<(
          { __typename?: 'LiveExampleDescription' }
          & Pick<LiveExampleDescription, 'json'>
        )> }
      )>> }
    )> }
  )> }
);
