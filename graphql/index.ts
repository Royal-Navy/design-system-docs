export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  contentfulMetadata: ContentfulMetadata;
  dataType?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ApiFieldLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  sys: Sys;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDataTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDefaultValueArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Singular API Field (makes up API Table). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiField) */
export type ApiFieldRequiredArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ApiFieldCollection = {
  __typename?: 'ApiFieldCollection';
  items: Array<Maybe<ApiField>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApiFieldFilter = {
  AND?: InputMaybe<Array<InputMaybe<ApiFieldFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ApiFieldFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataType?: InputMaybe<Scalars['String']>;
  dataType_contains?: InputMaybe<Scalars['String']>;
  dataType_exists?: InputMaybe<Scalars['Boolean']>;
  dataType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataType_not?: InputMaybe<Scalars['String']>;
  dataType_not_contains?: InputMaybe<Scalars['String']>;
  dataType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  defaultValue_exists?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  required?: InputMaybe<Scalars['Boolean']>;
  required_exists?: InputMaybe<Scalars['Boolean']>;
  required_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ApiFieldLinkingCollections = {
  __typename?: 'ApiFieldLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ApiFieldLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ApiFieldOrder {
  DataTypeAsc = 'dataType_ASC',
  DataTypeDesc = 'dataType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTable = Entry & {
  __typename?: 'ApiTable';
  apiFieldCollection?: Maybe<ApiTableApiFieldCollection>;
  apiReturnFieldCollection?: Maybe<ApiTableApiReturnFieldCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ApiTableLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableApiFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableApiReturnFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display low level APIs (collection of API Fields). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/apiTable) */
export type ApiTableTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ApiTableApiFieldCollection = {
  __typename?: 'ApiTableApiFieldCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApiTableApiReturnFieldCollection = {
  __typename?: 'ApiTableApiReturnFieldCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApiTableCollection = {
  __typename?: 'ApiTableCollection';
  items: Array<Maybe<ApiTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApiTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ApiTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ApiTableFilter>>>;
  apiFieldCollection_exists?: InputMaybe<Scalars['Boolean']>;
  apiReturnFieldCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ApiTableLinkingCollections = {
  __typename?: 'ApiTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ApiTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ApiTableLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ApiTableLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ApiTableOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  contentBlockCollection?: Maybe<ContentBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCardCollection?: Maybe<HeroCardCollection>;
};


export type AssetLinkingCollectionsContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** A button with a href which is nested within a component. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/button) */
export type Button = Entry & {
  __typename?: 'Button';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A button with a href which is nested within a component. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/button) */
export type ButtonHrefArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A button with a href which is nested within a component. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A button with a href which is nested within a component. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/button) */
export type ButtonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroCardCollection?: Maybe<HeroCardCollection>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ButtonLinkingCollectionsHeroCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ButtonOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlock = Entry & {
  __typename?: 'CodeBlock';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<CodeBlockDescription>;
  filename?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<CodeBlockLinkingCollections>;
  sourceCode?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockFilenameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockSourceCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display source code with syntax highlighting. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/codeBlock) */
export type CodeBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection';
  items: Array<Maybe<CodeBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CodeBlockDescription = {
  __typename?: 'CodeBlockDescription';
  json: Scalars['JSON'];
  links: CodeBlockDescriptionLinks;
};

export type CodeBlockDescriptionAssets = {
  __typename?: 'CodeBlockDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CodeBlockDescriptionEntries = {
  __typename?: 'CodeBlockDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CodeBlockDescriptionLinks = {
  __typename?: 'CodeBlockDescriptionLinks';
  assets: CodeBlockDescriptionAssets;
  entries: CodeBlockDescriptionEntries;
};

export type CodeBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filename_contains?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_not?: InputMaybe<Scalars['String']>;
  filename_not_contains?: InputMaybe<Scalars['String']>;
  filename_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sourceCode?: InputMaybe<Scalars['String']>;
  sourceCode_contains?: InputMaybe<Scalars['String']>;
  sourceCode_exists?: InputMaybe<Scalars['Boolean']>;
  sourceCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sourceCode_not?: InputMaybe<Scalars['String']>;
  sourceCode_not_contains?: InputMaybe<Scalars['String']>;
  sourceCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroCardCollection?: Maybe<HeroCardCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CodeBlockLinkingCollectionsHeroCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CodeBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type CodeBlockLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CodeBlockOrder {
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlock = Entry & {
  __typename?: 'ContentBlock';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ContentBlockDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContentBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display arbitrary markdown content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/contentBlock) */
export type ContentBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection';
  items: Array<Maybe<ContentBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlockDescription = {
  __typename?: 'ContentBlockDescription';
  json: Scalars['JSON'];
  links: ContentBlockDescriptionLinks;
};

export type ContentBlockDescriptionAssets = {
  __typename?: 'ContentBlockDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlockDescriptionEntries = {
  __typename?: 'ContentBlockDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlockDescriptionLinks = {
  __typename?: 'ContentBlockDescriptionLinks';
  assets: ContentBlockDescriptionAssets;
  entries: ContentBlockDescriptionEntries;
};

export type ContentBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ContentBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type Hero = Entry & {
  __typename?: 'Hero';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display introduction at the very top of the page. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCard = Entry & {
  __typename?: 'HeroCard';
  callToAction?: Maybe<Button>;
  code?: Maybe<CodeBlock>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  filesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<HeroCardLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardCallToActionArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardCodeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardFilesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a card that will be placed inside the Hero. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/heroCard) */
export type HeroCardVariantArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroCardCollection = {
  __typename?: 'HeroCardCollection';
  items: Array<Maybe<HeroCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroCardFilter>>>;
  callToAction?: InputMaybe<CfButtonNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<CfCodeBlockNestedFilter>;
  code_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant?: InputMaybe<Scalars['String']>;
  variant_contains?: InputMaybe<Scalars['String']>;
  variant_exists?: InputMaybe<Scalars['Boolean']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  variant_not?: InputMaybe<Scalars['String']>;
  variant_not_contains?: InputMaybe<Scalars['String']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroCardLinkingCollections = {
  __typename?: 'HeroCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type HeroCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroCardLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroCardOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading?: InputMaybe<Scalars['String']>;
  heading_contains?: InputMaybe<Scalars['String']>;
  heading_exists?: InputMaybe<Scalars['Boolean']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading_not?: InputMaybe<Scalars['String']>;
  heading_not_contains?: InputMaybe<Scalars['String']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  contentfulMetadata: ContentfulMetadata;
  heroButtons?: Maybe<Scalars['JSON']>;
  heroHeading?: Maybe<Scalars['String']>;
  heroSubHeading?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HomepageLinkingCollections>;
  section1CardsCollection?: Maybe<HomepageSection1CardsCollection>;
  section1Heading?: Maybe<Scalars['String']>;
  section1SubHeading?: Maybe<Scalars['String']>;
  section2Buttons?: Maybe<Scalars['JSON']>;
  section2Heading?: Maybe<Scalars['String']>;
  section2SubHeading?: Maybe<Scalars['String']>;
  section3CardsCollection?: Maybe<HomepageSection3CardsCollection>;
  section3Heading?: Maybe<Scalars['String']>;
  section3SubHeading?: Maybe<Scalars['String']>;
  section4Buttons?: Maybe<Scalars['JSON']>;
  section4Heading?: Maybe<Scalars['String']>;
  section4SubHeading?: Maybe<Scalars['String']>;
  section5Buttons?: Maybe<Scalars['JSON']>;
  section5Heading?: Maybe<Scalars['String']>;
  section5SubHeading?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroButtonsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageHeroSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1CardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1HeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection1SubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2ButtonsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2HeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection2SubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3CardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3HeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection3SubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4ButtonsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4HeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection4SubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5ButtonsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5HeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a docs-site Homepage and the associated content. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/homepage) */
export type HomepageSection5SubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  items: Array<Maybe<Homepage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomepageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroButtons_exists?: InputMaybe<Scalars['Boolean']>;
  heroHeading?: InputMaybe<Scalars['String']>;
  heroHeading_contains?: InputMaybe<Scalars['String']>;
  heroHeading_exists?: InputMaybe<Scalars['Boolean']>;
  heroHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroHeading_not?: InputMaybe<Scalars['String']>;
  heroHeading_not_contains?: InputMaybe<Scalars['String']>;
  heroHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSubHeading?: InputMaybe<Scalars['String']>;
  heroSubHeading_contains?: InputMaybe<Scalars['String']>;
  heroSubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  heroSubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSubHeading_not?: InputMaybe<Scalars['String']>;
  heroSubHeading_not_contains?: InputMaybe<Scalars['String']>;
  heroSubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section1CardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  section1Heading?: InputMaybe<Scalars['String']>;
  section1Heading_contains?: InputMaybe<Scalars['String']>;
  section1Heading_exists?: InputMaybe<Scalars['Boolean']>;
  section1Heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section1Heading_not?: InputMaybe<Scalars['String']>;
  section1Heading_not_contains?: InputMaybe<Scalars['String']>;
  section1Heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section1SubHeading?: InputMaybe<Scalars['String']>;
  section1SubHeading_contains?: InputMaybe<Scalars['String']>;
  section1SubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  section1SubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section1SubHeading_not?: InputMaybe<Scalars['String']>;
  section1SubHeading_not_contains?: InputMaybe<Scalars['String']>;
  section1SubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section2Buttons_exists?: InputMaybe<Scalars['Boolean']>;
  section2Heading?: InputMaybe<Scalars['String']>;
  section2Heading_contains?: InputMaybe<Scalars['String']>;
  section2Heading_exists?: InputMaybe<Scalars['Boolean']>;
  section2Heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section2Heading_not?: InputMaybe<Scalars['String']>;
  section2Heading_not_contains?: InputMaybe<Scalars['String']>;
  section2Heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section2SubHeading?: InputMaybe<Scalars['String']>;
  section2SubHeading_contains?: InputMaybe<Scalars['String']>;
  section2SubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  section2SubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section2SubHeading_not?: InputMaybe<Scalars['String']>;
  section2SubHeading_not_contains?: InputMaybe<Scalars['String']>;
  section2SubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section3CardsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  section3Heading?: InputMaybe<Scalars['String']>;
  section3Heading_contains?: InputMaybe<Scalars['String']>;
  section3Heading_exists?: InputMaybe<Scalars['Boolean']>;
  section3Heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section3Heading_not?: InputMaybe<Scalars['String']>;
  section3Heading_not_contains?: InputMaybe<Scalars['String']>;
  section3Heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section3SubHeading?: InputMaybe<Scalars['String']>;
  section3SubHeading_contains?: InputMaybe<Scalars['String']>;
  section3SubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  section3SubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section3SubHeading_not?: InputMaybe<Scalars['String']>;
  section3SubHeading_not_contains?: InputMaybe<Scalars['String']>;
  section3SubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section4Buttons_exists?: InputMaybe<Scalars['Boolean']>;
  section4Heading?: InputMaybe<Scalars['String']>;
  section4Heading_contains?: InputMaybe<Scalars['String']>;
  section4Heading_exists?: InputMaybe<Scalars['Boolean']>;
  section4Heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section4Heading_not?: InputMaybe<Scalars['String']>;
  section4Heading_not_contains?: InputMaybe<Scalars['String']>;
  section4Heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section4SubHeading?: InputMaybe<Scalars['String']>;
  section4SubHeading_contains?: InputMaybe<Scalars['String']>;
  section4SubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  section4SubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section4SubHeading_not?: InputMaybe<Scalars['String']>;
  section4SubHeading_not_contains?: InputMaybe<Scalars['String']>;
  section4SubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section5Buttons_exists?: InputMaybe<Scalars['Boolean']>;
  section5Heading?: InputMaybe<Scalars['String']>;
  section5Heading_contains?: InputMaybe<Scalars['String']>;
  section5Heading_exists?: InputMaybe<Scalars['Boolean']>;
  section5Heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section5Heading_not?: InputMaybe<Scalars['String']>;
  section5Heading_not_contains?: InputMaybe<Scalars['String']>;
  section5Heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section5SubHeading?: InputMaybe<Scalars['String']>;
  section5SubHeading_contains?: InputMaybe<Scalars['String']>;
  section5SubHeading_exists?: InputMaybe<Scalars['Boolean']>;
  section5SubHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  section5SubHeading_not?: InputMaybe<Scalars['String']>;
  section5SubHeading_not_contains?: InputMaybe<Scalars['String']>;
  section5SubHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomepageSection1CardsCollection = {
  __typename?: 'HomepageSection1CardsCollection';
  items: Array<Maybe<HeroCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HomepageSection3CardsCollection = {
  __typename?: 'HomepageSection3CardsCollection';
  items: Array<Maybe<SimpleCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ImageFormat {
  Avif = 'AVIF',
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
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExample = Entry & {
  __typename?: 'LiveExample';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<LiveExampleDescription>;
  linkedFrom?: Maybe<LiveExampleLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display an interactive example of component or collection of components. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/liveExample) */
export type LiveExampleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LiveExampleCollection = {
  __typename?: 'LiveExampleCollection';
  items: Array<Maybe<LiveExample>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LiveExampleDescription = {
  __typename?: 'LiveExampleDescription';
  json: Scalars['JSON'];
  links: LiveExampleDescriptionLinks;
};

export type LiveExampleDescriptionAssets = {
  __typename?: 'LiveExampleDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LiveExampleDescriptionEntries = {
  __typename?: 'LiveExampleDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LiveExampleDescriptionLinks = {
  __typename?: 'LiveExampleDescriptionLinks';
  assets: LiveExampleDescriptionAssets;
  entries: LiveExampleDescriptionEntries;
};

export type LiveExampleFilter = {
  AND?: InputMaybe<Array<InputMaybe<LiveExampleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveExampleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveExampleLinkingCollections = {
  __typename?: 'LiveExampleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  sectionCollection?: Maybe<SectionCollection>;
};


export type LiveExampleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LiveExampleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LiveExampleLinkingCollectionsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LiveExampleOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTable = Entry & {
  __typename?: 'MarkdownTable';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MarkdownTableLinkingCollections>;
  markdown?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Display a table using markdown code. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/markdownTable) */
export type MarkdownTableMarkdownArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type MarkdownTableCollection = {
  __typename?: 'MarkdownTableCollection';
  items: Array<Maybe<MarkdownTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MarkdownTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<MarkdownTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MarkdownTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  markdown?: InputMaybe<Scalars['String']>;
  markdown_contains?: InputMaybe<Scalars['String']>;
  markdown_exists?: InputMaybe<Scalars['Boolean']>;
  markdown_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  markdown_not?: InputMaybe<Scalars['String']>;
  markdown_not_contains?: InputMaybe<Scalars['String']>;
  markdown_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MarkdownTableLinkingCollections = {
  __typename?: 'MarkdownTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MarkdownTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MarkdownTableOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation';
  childrenCollection?: Maybe<NavigationChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a hierarchical structure of pages. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationChildrenCollection = {
  __typename?: 'NavigationChildrenCollection';
  items: Array<Maybe<NavigationElement>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElement = Entry & {
  __typename?: 'NavigationElement';
  childrenCollection?: Maybe<NavigationElementChildrenCollection>;
  contentfulMetadata: ContentfulMetadata;
  externalUri?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationElementLinkingCollections>;
  page?: Maybe<NavigationElementPage>;
  path?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementChildrenCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementExternalUriArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementPathArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A navigable element within a hierarchical Navigation (external URI or page reference). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/navigationElement) */
export type NavigationElementTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationElementChildrenCollection = {
  __typename?: 'NavigationElementChildrenCollection';
  items: Array<Maybe<NavigationElement>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationElementCollection = {
  __typename?: 'NavigationElementCollection';
  items: Array<Maybe<NavigationElement>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationElementFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationElementFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationElementFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalUri?: InputMaybe<Scalars['String']>;
  externalUri_contains?: InputMaybe<Scalars['String']>;
  externalUri_exists?: InputMaybe<Scalars['Boolean']>;
  externalUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  externalUri_not?: InputMaybe<Scalars['String']>;
  externalUri_not_contains?: InputMaybe<Scalars['String']>;
  externalUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page_exists?: InputMaybe<Scalars['Boolean']>;
  path?: InputMaybe<Scalars['String']>;
  path_contains?: InputMaybe<Scalars['String']>;
  path_exists?: InputMaybe<Scalars['Boolean']>;
  path_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_not?: InputMaybe<Scalars['String']>;
  path_not_contains?: InputMaybe<Scalars['String']>;
  path_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationElementLinkingCollections = {
  __typename?: 'NavigationElementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
};


export type NavigationElementLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationElementLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NavigationElementLinkingCollectionsNavigationElementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationElementOrder {
  ExternalUriAsc = 'externalUri_ASC',
  ExternalUriDesc = 'externalUri_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationElementPage = Page;

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  childrenCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentBannerDescription?: Maybe<Scalars['String']>;
  contentBannerTitle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  hideContentBanner?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  sectionCollection?: Maybe<PageSectionCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageContentBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageContentBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageHideContentBannerArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a single navigable route (with complex nested content). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentBannerDescription?: InputMaybe<Scalars['String']>;
  contentBannerDescription_contains?: InputMaybe<Scalars['String']>;
  contentBannerDescription_exists?: InputMaybe<Scalars['Boolean']>;
  contentBannerDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentBannerDescription_not?: InputMaybe<Scalars['String']>;
  contentBannerDescription_not_contains?: InputMaybe<Scalars['String']>;
  contentBannerDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentBannerTitle?: InputMaybe<Scalars['String']>;
  contentBannerTitle_contains?: InputMaybe<Scalars['String']>;
  contentBannerTitle_exists?: InputMaybe<Scalars['Boolean']>;
  contentBannerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentBannerTitle_not?: InputMaybe<Scalars['String']>;
  contentBannerTitle_not_contains?: InputMaybe<Scalars['String']>;
  contentBannerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hideContentBanner?: InputMaybe<Scalars['Boolean']>;
  hideContentBanner_exists?: InputMaybe<Scalars['Boolean']>;
  hideContentBanner_not?: InputMaybe<Scalars['Boolean']>;
  sectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsNavigationElementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageOrder {
  ContentBannerDescriptionAsc = 'contentBannerDescription_ASC',
  ContentBannerDescriptionDesc = 'contentBannerDescription_DESC',
  ContentBannerTitleAsc = 'contentBannerTitle_ASC',
  ContentBannerTitleDesc = 'contentBannerTitle_DESC',
  HideContentBannerAsc = 'hideContentBanner_ASC',
  HideContentBannerDesc = 'hideContentBanner_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  items: Array<Maybe<PageSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageSectionItem = ApiTable | CodeBlock | ContentBlock | Hero | LiveExample | Section;

export type Query = {
  __typename?: 'Query';
  apiField?: Maybe<ApiField>;
  apiFieldCollection?: Maybe<ApiFieldCollection>;
  apiTable?: Maybe<ApiTable>;
  apiTableCollection?: Maybe<ApiTableCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  codeBlock?: Maybe<CodeBlock>;
  codeBlockCollection?: Maybe<CodeBlockCollection>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlockCollection?: Maybe<ContentBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  hero?: Maybe<Hero>;
  heroCard?: Maybe<HeroCard>;
  heroCardCollection?: Maybe<HeroCardCollection>;
  heroCollection?: Maybe<HeroCollection>;
  homepage?: Maybe<Homepage>;
  homepageCollection?: Maybe<HomepageCollection>;
  liveExample?: Maybe<LiveExample>;
  liveExampleCollection?: Maybe<LiveExampleCollection>;
  markdownTable?: Maybe<MarkdownTable>;
  markdownTableCollection?: Maybe<MarkdownTableCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationElement?: Maybe<NavigationElement>;
  navigationElementCollection?: Maybe<NavigationElementCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  section?: Maybe<Section>;
  sectionCollection?: Maybe<SectionCollection>;
  simpleCard?: Maybe<SimpleCard>;
  simpleCardCollection?: Maybe<SimpleCardCollection>;
  storybookStory?: Maybe<StorybookStory>;
  storybookStoryCollection?: Maybe<StorybookStoryCollection>;
  swatch?: Maybe<Swatch>;
  swatchCollection?: Maybe<SwatchCollection>;
  swatchColour?: Maybe<SwatchColour>;
  swatchColourCollection?: Maybe<SwatchColourCollection>;
};


export type QueryApiFieldArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryApiFieldCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ApiFieldOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApiFieldFilter>;
};


export type QueryApiTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryApiTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ApiTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApiTableFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ButtonFilter>;
};


export type QueryCodeBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCodeBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CodeBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CodeBlockFilter>;
};


export type QueryContentBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlockFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroCardFilter>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HomepageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageFilter>;
};


export type QueryLiveExampleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLiveExampleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LiveExampleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LiveExampleFilter>;
};


export type QueryMarkdownTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMarkdownTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MarkdownTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarkdownTableFilter>;
};


export type QueryNavigationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationFilter>;
};


export type QueryNavigationElementArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationElementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationElementOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationElementFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySectionArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionFilter>;
};


export type QuerySimpleCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySimpleCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SimpleCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SimpleCardFilter>;
};


export type QueryStorybookStoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStorybookStoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<StorybookStoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StorybookStoryFilter>;
};


export type QuerySwatchArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySwatchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SwatchOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SwatchFilter>;
};


export type QuerySwatchColourArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySwatchColourCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SwatchColourOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SwatchColourFilter>;
};

/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type Section = Entry & {
  __typename?: 'Section';
  contentCollection?: Maybe<SectionContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SectionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Top level content section (e.g. Introduction, Documentation). [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/section) */
export type SectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SectionCollection = {
  __typename?: 'SectionCollection';
  items: Array<Maybe<Section>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection';
  items: Array<Maybe<SectionContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SectionContentItem = ApiTable | CodeBlock | ContentBlock | Hero | LiveExample;

export type SectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionFilter>>>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCard = Entry & {
  __typename?: 'SimpleCard';
  buttonHref?: Maybe<Scalars['String']>;
  buttonTitle?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SimpleCardLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  titleColor?: Maybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardButtonHrefArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardButtonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a simple arbitrary card that links to another section of the site. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/simpleCard) */
export type SimpleCardTitleColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SimpleCardCollection = {
  __typename?: 'SimpleCardCollection';
  items: Array<Maybe<SimpleCard>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SimpleCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<SimpleCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SimpleCardFilter>>>;
  buttonHref?: InputMaybe<Scalars['String']>;
  buttonHref_contains?: InputMaybe<Scalars['String']>;
  buttonHref_exists?: InputMaybe<Scalars['Boolean']>;
  buttonHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonHref_not?: InputMaybe<Scalars['String']>;
  buttonHref_not_contains?: InputMaybe<Scalars['String']>;
  buttonHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonTitle?: InputMaybe<Scalars['String']>;
  buttonTitle_contains?: InputMaybe<Scalars['String']>;
  buttonTitle_exists?: InputMaybe<Scalars['Boolean']>;
  buttonTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonTitle_not?: InputMaybe<Scalars['String']>;
  buttonTitle_not_contains?: InputMaybe<Scalars['String']>;
  buttonTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  titleColor?: InputMaybe<Scalars['String']>;
  titleColor_contains?: InputMaybe<Scalars['String']>;
  titleColor_exists?: InputMaybe<Scalars['Boolean']>;
  titleColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  titleColor_not?: InputMaybe<Scalars['String']>;
  titleColor_not_contains?: InputMaybe<Scalars['String']>;
  titleColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SimpleCardLinkingCollections = {
  __typename?: 'SimpleCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homepageCollection?: Maybe<HomepageCollection>;
};


export type SimpleCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SimpleCardLinkingCollectionsHomepageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SimpleCardOrder {
  ButtonHrefAsc = 'buttonHref_ASC',
  ButtonHrefDesc = 'buttonHref_DESC',
  ButtonTitleAsc = 'buttonTitle_ASC',
  ButtonTitleDesc = 'buttonTitle_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleColorAsc = 'titleColor_ASC',
  TitleColorDesc = 'titleColor_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** An embedded story from Storybook. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/storybookStory) */
export type StorybookStory = Entry & {
  __typename?: 'StorybookStory';
  args?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StorybookStoryLinkingCollections>;
  storyId?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** An embedded story from Storybook. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/storybookStory) */
export type StorybookStoryArgsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** An embedded story from Storybook. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/storybookStory) */
export type StorybookStoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** An embedded story from Storybook. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/storybookStory) */
export type StorybookStoryStoryIdArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** An embedded story from Storybook. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/storybookStory) */
export type StorybookStoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type StorybookStoryCollection = {
  __typename?: 'StorybookStoryCollection';
  items: Array<Maybe<StorybookStory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type StorybookStoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<StorybookStoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StorybookStoryFilter>>>;
  args?: InputMaybe<Scalars['String']>;
  args_contains?: InputMaybe<Scalars['String']>;
  args_exists?: InputMaybe<Scalars['Boolean']>;
  args_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  args_not?: InputMaybe<Scalars['String']>;
  args_not_contains?: InputMaybe<Scalars['String']>;
  args_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  storyId?: InputMaybe<Scalars['String']>;
  storyId_contains?: InputMaybe<Scalars['String']>;
  storyId_exists?: InputMaybe<Scalars['Boolean']>;
  storyId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storyId_not?: InputMaybe<Scalars['String']>;
  storyId_not_contains?: InputMaybe<Scalars['String']>;
  storyId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StorybookStoryLinkingCollections = {
  __typename?: 'StorybookStoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StorybookStoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum StorybookStoryOrder {
  ArgsAsc = 'args_ASC',
  ArgsDesc = 'args_DESC',
  StoryIdAsc = 'storyId_ASC',
  StoryIdDesc = 'storyId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a collection of colours and their associated hex values. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type Swatch = Entry & {
  __typename?: 'Swatch';
  colourCollection?: Maybe<SwatchColourCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SwatchLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Represents a collection of colours and their associated hex values. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchColourCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Represents a collection of colours and their associated hex values. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a collection of colours and their associated hex values. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatch) */
export type SwatchTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SwatchCollection = {
  __typename?: 'SwatchCollection';
  items: Array<Maybe<Swatch>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** A single colour and associated hex value. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColour = Entry & {
  __typename?: 'SwatchColour';
  colour?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  isDark?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<SwatchColourLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** A single colour and associated hex value. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourColourArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single colour and associated hex value. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourIsDarkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A single colour and associated hex value. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A single colour and associated hex value. [See type definition](https://app.contentful.com/spaces/fq5pxympyusn/content_types/swatchColour) */
export type SwatchColourNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SwatchColourCollection = {
  __typename?: 'SwatchColourCollection';
  items: Array<Maybe<SwatchColour>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SwatchColourFilter = {
  AND?: InputMaybe<Array<InputMaybe<SwatchColourFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SwatchColourFilter>>>;
  colour?: InputMaybe<Scalars['String']>;
  colour_contains?: InputMaybe<Scalars['String']>;
  colour_exists?: InputMaybe<Scalars['Boolean']>;
  colour_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colour_not?: InputMaybe<Scalars['String']>;
  colour_not_contains?: InputMaybe<Scalars['String']>;
  colour_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isDark?: InputMaybe<Scalars['Boolean']>;
  isDark_exists?: InputMaybe<Scalars['Boolean']>;
  isDark_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SwatchColourLinkingCollections = {
  __typename?: 'SwatchColourLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SwatchColourLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SwatchColourOrder {
  ColourAsc = 'colour_ASC',
  ColourDesc = 'colour_DESC',
  IsDarkAsc = 'isDark_ASC',
  IsDarkDesc = 'isDark_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SwatchFilter = {
  AND?: InputMaybe<Array<InputMaybe<SwatchFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SwatchFilter>>>;
  colourCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SwatchLinkingCollections = {
  __typename?: 'SwatchLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SwatchLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SwatchOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfButtonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfButtonNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']>;
  href_contains?: InputMaybe<Scalars['String']>;
  href_exists?: InputMaybe<Scalars['Boolean']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  href_not?: InputMaybe<Scalars['String']>;
  href_not_contains?: InputMaybe<Scalars['String']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfCodeBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCodeBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCodeBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filename_contains?: InputMaybe<Scalars['String']>;
  filename_exists?: InputMaybe<Scalars['Boolean']>;
  filename_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filename_not?: InputMaybe<Scalars['String']>;
  filename_not_contains?: InputMaybe<Scalars['String']>;
  filename_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sourceCode?: InputMaybe<Scalars['String']>;
  sourceCode_contains?: InputMaybe<Scalars['String']>;
  sourceCode_exists?: InputMaybe<Scalars['Boolean']>;
  sourceCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sourceCode_not?: InputMaybe<Scalars['String']>;
  sourceCode_not_contains?: InputMaybe<Scalars['String']>;
  sourceCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomepageByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type HomepageByIdQuery = { __typename?: 'Query', homepage?: { __typename?: 'Homepage', heroHeading?: string | null, heroSubHeading?: string | null, heroButtons?: any | null, section1Heading?: string | null, section1SubHeading?: string | null, section2Heading?: string | null, section2SubHeading?: string | null, section2Buttons?: any | null, section3Heading?: string | null, section3SubHeading?: string | null, section4Heading?: string | null, section4SubHeading?: string | null, section4Buttons?: any | null, section5Heading?: string | null, section5SubHeading?: string | null, section5Buttons?: any | null, section1CardsCollection?: { __typename?: 'HomepageSection1CardsCollection', items: Array<{ __typename?: 'HeroCard', variant?: string | null, title?: string | null, description?: string | null, filesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null } | null> } | null, code?: { __typename?: 'CodeBlock', sourceCode?: string | null } | null, callToAction?: { __typename?: 'Button', title?: string | null, href?: string | null } | null } | null> } | null, section3CardsCollection?: { __typename?: 'HomepageSection3CardsCollection', items: Array<{ __typename?: 'SimpleCard', title?: string | null, titleColor?: string | null, description?: string | null, buttonHref?: string | null, buttonTitle?: string | null } | null> } | null } | null };

export type NavigationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NavigationByIdQuery = { __typename?: 'Query', navigation?: { __typename?: 'Navigation', title?: string | null, childrenCollection?: { __typename?: 'NavigationChildrenCollection', items: Array<{ __typename?: 'NavigationElement', title?: string | null, path?: string | null, externalUri?: string | null, page?: { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null, childrenCollection?: { __typename?: 'NavigationElementChildrenCollection', items: Array<{ __typename?: 'NavigationElement', title?: string | null, path?: string | null, externalUri?: string | null, page?: { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null } | null };

export type NavigationElementsFlatQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationElementsFlatQuery = { __typename?: 'Query', navigationElementCollection?: { __typename?: 'NavigationElementCollection', items: Array<{ __typename?: 'NavigationElement', title?: string | null, path?: string | null, externalUri?: string | null, page?: { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null };

export type PageByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type PageByPathQuery = { __typename?: 'Query', navigationElementCollection?: { __typename?: 'NavigationElementCollection', items: Array<{ __typename?: 'NavigationElement', title?: string | null, path?: string | null, externalUri?: string | null, childrenCollection?: { __typename?: 'NavigationElementChildrenCollection', items: Array<{ __typename?: 'NavigationElement', title?: string | null, path?: string | null, externalUri?: string | null, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> } } | null> } | null, page?: { __typename?: 'Page', title?: string | null, hideContentBanner?: boolean | null, contentBannerTitle?: string | null, contentBannerDescription?: string | null, sys: { __typename?: 'Sys', id: string }, sectionCollection?: { __typename?: 'PageSectionCollection', items: Array<{ __typename: 'ApiTable', title?: string | null, apiTableDescription?: string | null, sys: { __typename?: 'Sys', id: string }, apiFieldCollection?: { __typename?: 'ApiTableApiFieldCollection', items: Array<{ __typename?: 'ApiField', name?: string | null, dataType?: string | null, defaultValue?: any | null, description?: string | null, required?: boolean | null } | { __typename?: 'ApiTable' } | { __typename?: 'Button' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'HeroCard' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'StorybookStory' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' } | null> } | null, apiReturnFieldCollection?: { __typename?: 'ApiTableApiReturnFieldCollection', items: Array<{ __typename?: 'ApiField', name?: string | null, dataType?: string | null, defaultValue?: any | null, description?: string | null, required?: boolean | null } | { __typename?: 'ApiTable' } | { __typename?: 'Button' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'HeroCard' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'StorybookStory' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' } | null> } | null } | { __typename: 'CodeBlock', title?: string | null, filename?: string | null, sourceCode?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CodeBlockDescription', json: any } | null } | { __typename: 'ContentBlock', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'ContentBlockDescription', json: any, links: { __typename?: 'ContentBlockDescriptionLinks', assets: { __typename?: 'ContentBlockDescriptionAssets', block: Array<{ __typename?: 'Asset', fileName?: string | null, title?: string | null, description?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null>, hyperlink: Array<{ __typename?: 'Asset', url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> }, entries: { __typename?: 'ContentBlockDescriptionEntries', block: Array<{ __typename: 'ApiField', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ApiTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CodeBlock', sourceCode?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Hero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroCard', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Homepage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveExample', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MarkdownTable', markdown?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Navigation', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationElement', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SimpleCard', sys: { __typename?: 'Sys', id: string } } | { __typename: 'StorybookStory', storyId?: string | null, args?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Swatch', colourCollection?: { __typename?: 'SwatchColourCollection', items: Array<{ __typename?: 'SwatchColour', name?: string | null, colour?: string | null, isDark?: boolean | null } | null> } | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'SwatchColour', sys: { __typename?: 'Sys', id: string } } | null>, inline: Array<{ __typename: 'ApiField', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ApiTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Button', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CodeBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Hero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroCard', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Homepage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveExample', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MarkdownTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Navigation', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationElement', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SimpleCard', sys: { __typename?: 'Sys', id: string } } | { __typename: 'StorybookStory', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Swatch', sys: { __typename?: 'Sys', id: string } } | { __typename: 'SwatchColour', sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | { __typename: 'Hero', title?: string | null, heading?: string | null, heroDescription?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveExample', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'LiveExampleDescription', json: any } | null } | { __typename: 'Section', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null } | null> } | null };

export type PageStructureQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageStructureQuery = { __typename?: 'Query', page?: { __typename?: 'Page', title?: string | null, sectionCollection?: { __typename?: 'PageSectionCollection', items: Array<{ __typename?: 'ApiTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'CodeBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Hero', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'LiveExample', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Section', title?: string | null, sys: { __typename?: 'Sys', id: string }, contentCollection?: { __typename?: 'SectionContentCollection', items: Array<{ __typename: 'ApiTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CodeBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Hero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveExample', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null } | null };

export type SectionContentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SectionContentQuery = { __typename?: 'Query', section?: { __typename?: 'Section', title?: string | null, contentCollection?: { __typename?: 'SectionContentCollection', items: Array<{ __typename: 'ApiTable', title?: string | null, apiTableDescription?: string | null, sys: { __typename?: 'Sys', id: string }, apiFieldCollection?: { __typename?: 'ApiTableApiFieldCollection', items: Array<{ __typename?: 'ApiField', name?: string | null, dataType?: string | null, defaultValue?: any | null, description?: string | null, required?: boolean | null } | { __typename?: 'ApiTable' } | { __typename?: 'Button' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'HeroCard' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'StorybookStory' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' } | null> } | null, apiReturnFieldCollection?: { __typename?: 'ApiTableApiReturnFieldCollection', items: Array<{ __typename?: 'ApiField', name?: string | null, dataType?: string | null, defaultValue?: any | null, description?: string | null, required?: boolean | null } | { __typename?: 'ApiTable' } | { __typename?: 'Button' } | { __typename?: 'CodeBlock' } | { __typename?: 'ContentBlock' } | { __typename?: 'Hero' } | { __typename?: 'HeroCard' } | { __typename?: 'Homepage' } | { __typename?: 'LiveExample' } | { __typename?: 'MarkdownTable' } | { __typename?: 'Navigation' } | { __typename?: 'NavigationElement' } | { __typename?: 'Page' } | { __typename?: 'Section' } | { __typename?: 'SimpleCard' } | { __typename?: 'StorybookStory' } | { __typename?: 'Swatch' } | { __typename?: 'SwatchColour' } | null> } | null } | { __typename: 'CodeBlock', title?: string | null, filename?: string | null, sourceCode?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'CodeBlockDescription', json: any } | null } | { __typename: 'ContentBlock', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'ContentBlockDescription', json: any } | null, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | { __typename: 'Hero', title?: string | null, heading?: string | null, heroDescription?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveExample', title?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'LiveExampleDescription', json: any } | null } | null> } | null } | null };
