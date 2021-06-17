export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Dimension: any
  Quality: any
  HexColor: any
  JSON: any
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  apiTable?: Maybe<ApiTable>
  apiTableCollection?: Maybe<ApiTableCollection>
  contentBlock?: Maybe<ContentBlock>
  contentBlockCollection?: Maybe<ContentBlockCollection>
  apiField?: Maybe<ApiField>
  apiFieldCollection?: Maybe<ApiFieldCollection>
  hero?: Maybe<Hero>
  heroCollection?: Maybe<HeroCollection>
  page?: Maybe<Page>
  pageCollection?: Maybe<PageCollection>
  section?: Maybe<Section>
  sectionCollection?: Maybe<SectionCollection>
  codeBlock?: Maybe<CodeBlock>
  codeBlockCollection?: Maybe<CodeBlockCollection>
  liveExample?: Maybe<LiveExample>
  liveExampleCollection?: Maybe<LiveExampleCollection>
  entryCollection?: Maybe<EntryCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<AssetFilter>
  order?: Maybe<Array<Maybe<AssetOrder>>>
}

export type QueryApiTableArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryApiTableCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ApiTableFilter>
  order?: Maybe<Array<Maybe<ApiTableOrder>>>
}

export type QueryContentBlockArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryContentBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ContentBlockFilter>
  order?: Maybe<Array<Maybe<ContentBlockOrder>>>
}

export type QueryApiFieldArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<ApiFieldFilter>
  order?: Maybe<Array<Maybe<ApiFieldOrder>>>
}

export type QueryHeroArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryHeroCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<HeroFilter>
  order?: Maybe<Array<Maybe<HeroOrder>>>
}

export type QueryPageArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<PageFilter>
  order?: Maybe<Array<Maybe<PageOrder>>>
}

export type QuerySectionArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QuerySectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<SectionFilter>
  order?: Maybe<Array<Maybe<SectionOrder>>>
}

export type QueryCodeBlockArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryCodeBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<CodeBlockFilter>
  order?: Maybe<Array<Maybe<CodeBlockOrder>>>
}

export type QueryLiveExampleArgs = {
  id: Scalars['String']
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type QueryLiveExampleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<LiveExampleFilter>
  order?: Maybe<Array<Maybe<LiveExampleOrder>>>
}

export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
  where?: Maybe<EntryFilter>
  order?: Maybe<Array<Maybe<EntryOrder>>>
}

export type Asset = {
  __typename?: 'Asset'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
}

export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
}

export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Sys = {
  __typename?: 'Sys'
  id: Scalars['String']
  spaceId: Scalars['String']
  environmentId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ImageTransformOptions = {
  width?: Maybe<Scalars['Dimension']>
  height?: Maybe<Scalars['Dimension']>
  quality?: Maybe<Scalars['Quality']>
  cornerRadius?: Maybe<Scalars['Int']>
  resizeStrategy?: Maybe<ImageResizeStrategy>
  resizeFocus?: Maybe<ImageResizeFocus>
  backgroundColor?: Maybe<Scalars['HexColor']>
  format?: Maybe<ImageFormat>
}

export enum ImageResizeStrategy {
  Fit = 'FIT',
  Pad = 'PAD',
  Fill = 'FILL',
  Scale = 'SCALE',
  Crop = 'CROP',
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  Center = 'CENTER',
  Top = 'TOP',
  TopRight = 'TOP_RIGHT',
  Right = 'RIGHT',
  BottomRight = 'BOTTOM_RIGHT',
  Bottom = 'BOTTOM',
  BottomLeft = 'BOTTOM_LEFT',
  Left = 'LEFT',
  TopLeft = 'TOP_LEFT',
  Face = 'FACE',
  Faces = 'FACES',
}

export enum ImageFormat {
  Jpg = 'JPG',
  JpgProgressive = 'JPG_PROGRESSIVE',
  Png = 'PNG',
  Png8 = 'PNG8',
  Webp = 'WEBP',
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  contentBlockCollection?: Maybe<ContentBlockCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type AssetLinkingCollectionsContentBlockCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type Entry = {
  sys: Sys
  contentfulMetadata: ContentfulMetadata
}

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ContentBlock>>
}

export type ContentBlock = Entry & {
  __typename?: 'ContentBlock'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ContentBlockLinkingCollections>
  title?: Maybe<Scalars['String']>
  description?: Maybe<ContentBlockDescription>
  image?: Maybe<Asset>
}

export type ContentBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ContentBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ContentBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ContentBlockImageArgs = {
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  sectionCollection?: Maybe<SectionCollection>
}

export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ContentBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SectionCollection = {
  __typename?: 'SectionCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Section>>
}

export type Section = Entry & {
  __typename?: 'Section'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<SectionLinkingCollections>
  title?: Maybe<Scalars['String']>
  contentCollection?: Maybe<SectionContentCollection>
}

export type SectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SectionTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type SectionContentCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SectionLinkingCollections = {
  __typename?: 'SectionLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
}

export type SectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SectionLinkingCollectionsPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PageCollection = {
  __typename?: 'PageCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Page>>
}

export type Page = Entry & {
  __typename?: 'Page'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<PageLinkingCollections>
  title?: Maybe<Scalars['String']>
  sectionCollection?: Maybe<PageSectionCollection>
}

export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type PageTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type PageSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Section>>
}

export type SectionContentCollection = {
  __typename?: 'SectionContentCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<SectionContentItem>>
}

export type SectionContentItem =
  | ApiTable
  | CodeBlock
  | ContentBlock
  | Hero
  | LiveExample

export type ApiTable = Entry & {
  __typename?: 'ApiTable'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ApiTableLinkingCollections>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  apiFieldCollection?: Maybe<ApiTableApiFieldCollection>
  apiReturnFieldCollection?: Maybe<ApiTableApiReturnFieldCollection>
}

export type ApiTableLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ApiTableTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiTableDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiTableApiFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ApiTableApiReturnFieldCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ApiTableLinkingCollections = {
  __typename?: 'ApiTableLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  sectionCollection?: Maybe<SectionCollection>
}

export type ApiTableLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ApiTableLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ApiTableApiFieldCollection = {
  __typename?: 'ApiTableApiFieldCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type ApiTableApiReturnFieldCollection = {
  __typename?: 'ApiTableApiReturnFieldCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Entry>>
}

export type CodeBlock = Entry & {
  __typename?: 'CodeBlock'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<CodeBlockLinkingCollections>
  title?: Maybe<Scalars['String']>
  description?: Maybe<CodeBlockDescription>
  filename?: Maybe<Scalars['String']>
  sourceCode?: Maybe<Scalars['String']>
}

export type CodeBlockLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type CodeBlockTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockFilenameArgs = {
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockSourceCodeArgs = {
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  sectionCollection?: Maybe<SectionCollection>
}

export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type CodeBlockDescription = {
  __typename?: 'CodeBlockDescription'
  json: Scalars['JSON']
  links: CodeBlockDescriptionLinks
}

export type CodeBlockDescriptionLinks = {
  __typename?: 'CodeBlockDescriptionLinks'
  entries: CodeBlockDescriptionEntries
  assets: CodeBlockDescriptionAssets
}

export type CodeBlockDescriptionEntries = {
  __typename?: 'CodeBlockDescriptionEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type CodeBlockDescriptionAssets = {
  __typename?: 'CodeBlockDescriptionAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type Hero = Entry & {
  __typename?: 'Hero'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<HeroLinkingCollections>
  title?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type HeroLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type HeroTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type HeroHeadingArgs = {
  locale?: Maybe<Scalars['String']>
}

export type HeroDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  sectionCollection?: Maybe<SectionCollection>
}

export type HeroLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type HeroLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type LiveExample = Entry & {
  __typename?: 'LiveExample'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<LiveExampleLinkingCollections>
  title?: Maybe<Scalars['String']>
  description?: Maybe<LiveExampleDescription>
}

export type LiveExampleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type LiveExampleTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type LiveExampleDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type LiveExampleLinkingCollections = {
  __typename?: 'LiveExampleLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  sectionCollection?: Maybe<SectionCollection>
}

export type LiveExampleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type LiveExampleLinkingCollectionsSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type LiveExampleDescription = {
  __typename?: 'LiveExampleDescription'
  json: Scalars['JSON']
  links: LiveExampleDescriptionLinks
}

export type LiveExampleDescriptionLinks = {
  __typename?: 'LiveExampleDescriptionLinks'
  entries: LiveExampleDescriptionEntries
  assets: LiveExampleDescriptionAssets
}

export type LiveExampleDescriptionEntries = {
  __typename?: 'LiveExampleDescriptionEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type LiveExampleDescriptionAssets = {
  __typename?: 'LiveExampleDescriptionAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type ContentBlockDescription = {
  __typename?: 'ContentBlockDescription'
  json: Scalars['JSON']
  links: ContentBlockDescriptionLinks
}

export type ContentBlockDescriptionLinks = {
  __typename?: 'ContentBlockDescriptionLinks'
  entries: ContentBlockDescriptionEntries
  assets: ContentBlockDescriptionAssets
}

export type ContentBlockDescriptionEntries = {
  __typename?: 'ContentBlockDescriptionEntries'
  inline: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  block: Array<Maybe<Entry>>
}

export type ContentBlockDescriptionAssets = {
  __typename?: 'ContentBlockDescriptionAssets'
  hyperlink: Array<Maybe<Asset>>
  block: Array<Maybe<Asset>>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Asset>>
}

export type AssetFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  url_exists?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  url_not?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_contains?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  size_exists?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  size_not?: Maybe<Scalars['Int']>
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_gt?: Maybe<Scalars['Int']>
  size_gte?: Maybe<Scalars['Int']>
  size_lt?: Maybe<Scalars['Int']>
  size_lte?: Maybe<Scalars['Int']>
  contentType_exists?: Maybe<Scalars['Boolean']>
  contentType?: Maybe<Scalars['String']>
  contentType_not?: Maybe<Scalars['String']>
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_contains?: Maybe<Scalars['String']>
  contentType_not_contains?: Maybe<Scalars['String']>
  fileName_exists?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['String']>
  fileName_not?: Maybe<Scalars['String']>
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_contains?: Maybe<Scalars['String']>
  fileName_not_contains?: Maybe<Scalars['String']>
  width_exists?: Maybe<Scalars['Boolean']>
  width?: Maybe<Scalars['Int']>
  width_not?: Maybe<Scalars['Int']>
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_gt?: Maybe<Scalars['Int']>
  width_gte?: Maybe<Scalars['Int']>
  width_lt?: Maybe<Scalars['Int']>
  width_lte?: Maybe<Scalars['Int']>
  height_exists?: Maybe<Scalars['Boolean']>
  height?: Maybe<Scalars['Int']>
  height_not?: Maybe<Scalars['Int']>
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_gt?: Maybe<Scalars['Int']>
  height_gte?: Maybe<Scalars['Int']>
  height_lt?: Maybe<Scalars['Int']>
  height_lte?: Maybe<Scalars['Int']>
  OR?: Maybe<Array<Maybe<AssetFilter>>>
  AND?: Maybe<Array<Maybe<AssetFilter>>>
}

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  id_not?: Maybe<Scalars['String']>
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains?: Maybe<Scalars['String']>
  id_not_contains?: Maybe<Scalars['String']>
  publishedAt_exists?: Maybe<Scalars['Boolean']>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedAt_not?: Maybe<Scalars['DateTime']>
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>
  publishedVersion_exists?: Maybe<Scalars['Boolean']>
  publishedVersion?: Maybe<Scalars['Float']>
  publishedVersion_not?: Maybe<Scalars['Float']>
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  publishedVersion_gt?: Maybe<Scalars['Float']>
  publishedVersion_gte?: Maybe<Scalars['Float']>
  publishedVersion_lt?: Maybe<Scalars['Float']>
  publishedVersion_lte?: Maybe<Scalars['Float']>
}

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>
  tags?: Maybe<ContentfulMetadataTagsFilter>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ApiTableCollection = {
  __typename?: 'ApiTableCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ApiTable>>
}

export type ApiTableFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  apiFieldCollection_exists?: Maybe<Scalars['Boolean']>
  apiReturnFieldCollection_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<ApiTableFilter>>>
  AND?: Maybe<Array<Maybe<ApiTableFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentBlockFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  image_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<ContentBlockFilter>>>
  AND?: Maybe<Array<Maybe<ContentBlockFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ApiField = Entry & {
  __typename?: 'ApiField'
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  linkedFrom?: Maybe<ApiFieldLinkingCollections>
  name?: Maybe<Scalars['String']>
  dataType?: Maybe<Scalars['String']>
  defaultValue?: Maybe<Scalars['JSON']>
  description?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
}

export type ApiFieldLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ApiFieldNameArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldDataTypeArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldDefaultValueArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldRequiredArgs = {
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldLinkingCollections = {
  __typename?: 'ApiFieldLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ApiFieldLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  preview?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type ApiFieldCollection = {
  __typename?: 'ApiFieldCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<ApiField>>
}

export type ApiFieldFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  name_exists?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  dataType_exists?: Maybe<Scalars['Boolean']>
  dataType?: Maybe<Scalars['String']>
  dataType_not?: Maybe<Scalars['String']>
  dataType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  dataType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  dataType_contains?: Maybe<Scalars['String']>
  dataType_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  required_exists?: Maybe<Scalars['Boolean']>
  required?: Maybe<Scalars['Boolean']>
  required_not?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<ApiFieldFilter>>>
  AND?: Maybe<Array<Maybe<ApiFieldFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type HeroCollection = {
  __typename?: 'HeroCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<Hero>>
}

export type HeroFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  heading_exists?: Maybe<Scalars['Boolean']>
  heading?: Maybe<Scalars['String']>
  heading_not?: Maybe<Scalars['String']>
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  heading_contains?: Maybe<Scalars['String']>
  heading_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<HeroFilter>>>
  AND?: Maybe<Array<Maybe<HeroFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PageFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  sectionCollection_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<PageFilter>>>
  AND?: Maybe<Array<Maybe<PageFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type SectionFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  contentCollection_exists?: Maybe<Scalars['Boolean']>
  OR?: Maybe<Array<Maybe<SectionFilter>>>
  AND?: Maybe<Array<Maybe<SectionFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<CodeBlock>>
}

export type CodeBlockFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  filename_exists?: Maybe<Scalars['Boolean']>
  filename?: Maybe<Scalars['String']>
  filename_not?: Maybe<Scalars['String']>
  filename_in?: Maybe<Array<Maybe<Scalars['String']>>>
  filename_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  filename_contains?: Maybe<Scalars['String']>
  filename_not_contains?: Maybe<Scalars['String']>
  sourceCode_exists?: Maybe<Scalars['Boolean']>
  sourceCode?: Maybe<Scalars['String']>
  sourceCode_not?: Maybe<Scalars['String']>
  sourceCode_in?: Maybe<Array<Maybe<Scalars['String']>>>
  sourceCode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  sourceCode_contains?: Maybe<Scalars['String']>
  sourceCode_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<CodeBlockFilter>>>
  AND?: Maybe<Array<Maybe<CodeBlockFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type LiveExampleCollection = {
  __typename?: 'LiveExampleCollection'
  total: Scalars['Int']
  skip: Scalars['Int']
  limit: Scalars['Int']
  items: Array<Maybe<LiveExample>>
}

export type LiveExampleFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  title_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_not?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_contains?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  OR?: Maybe<Array<Maybe<LiveExampleFilter>>>
  AND?: Maybe<Array<Maybe<LiveExampleFilter>>>
}

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type EntryFilter = {
  sys?: Maybe<SysFilter>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  OR?: Maybe<Array<Maybe<EntryFilter>>>
  AND?: Maybe<Array<Maybe<EntryFilter>>>
}

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}
