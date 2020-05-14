export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DataJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  info?: Maybe<DataJsonInfo>;
  career_summary?: Maybe<DataJsonCareer_Summary>;
  career_history?: Maybe<DataJsonCareer_History>;
  technical_skills?: Maybe<DataJsonTechnical_Skills>;
  interests?: Maybe<DataJsonInterests>;
  education?: Maybe<DataJsonEducation>;
  side_projects?: Maybe<DataJsonSide_Projects>;
  rawJson?: Maybe<Scalars['String']>;
  fileRelativePath?: Maybe<Scalars['String']>;
};

export type DataJsonCareer_History = {
  section_title?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<DataJsonCareer_HistoryJobs>>>;
};

export type DataJsonCareer_HistoryFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  jobs?: Maybe<DataJsonCareer_HistoryJobsFilterListInput>;
};

export type DataJsonCareer_HistoryJobs = {
  role?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  end_date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  is_actual?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
};


export type DataJsonCareer_HistoryJobsStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DataJsonCareer_HistoryJobsEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DataJsonCareer_HistoryJobsFilterInput = {
  role?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  is_actual?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonCareer_HistoryJobsFilterListInput = {
  elemMatch?: Maybe<DataJsonCareer_HistoryJobsFilterInput>;
};

export type DataJsonCareer_Summary = {
  section_title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DataJsonCareer_SummaryFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DataJsonGroupConnection>;
};


export type DataJsonConnectionDistinctArgs = {
  field: DataJsonFieldsEnum;
};


export type DataJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DataJsonFieldsEnum;
};

export type DataJsonEdge = {
  next?: Maybe<DataJson>;
  node: DataJson;
  previous?: Maybe<DataJson>;
};

export type DataJsonEducation = {
  section_title?: Maybe<Scalars['String']>;
  formal?: Maybe<Array<Maybe<DataJsonEducationFormal>>>;
  languages?: Maybe<Array<Maybe<DataJsonEducationLanguages>>>;
  extra_courses?: Maybe<DataJsonEducationExtra_Courses>;
};

export type DataJsonEducationExtra_Courses = {
  section_title?: Maybe<Scalars['String']>;
  platforms?: Maybe<Array<Maybe<DataJsonEducationExtra_CoursesPlatforms>>>;
};

export type DataJsonEducationExtra_CoursesFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  platforms?: Maybe<DataJsonEducationExtra_CoursesPlatformsFilterListInput>;
};

export type DataJsonEducationExtra_CoursesPlatforms = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  courses?: Maybe<Array<Maybe<DataJsonEducationExtra_CoursesPlatformsCourses>>>;
};

export type DataJsonEducationExtra_CoursesPlatformsCourses = {
  name?: Maybe<Scalars['String']>;
  hours?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};

export type DataJsonEducationExtra_CoursesPlatformsCoursesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  hours?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonEducationExtra_CoursesPlatformsCoursesFilterListInput = {
  elemMatch?: Maybe<DataJsonEducationExtra_CoursesPlatformsCoursesFilterInput>;
};

export type DataJsonEducationExtra_CoursesPlatformsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  courses?: Maybe<DataJsonEducationExtra_CoursesPlatformsCoursesFilterListInput>;
};

export type DataJsonEducationExtra_CoursesPlatformsFilterListInput = {
  elemMatch?: Maybe<DataJsonEducationExtra_CoursesPlatformsFilterInput>;
};

export type DataJsonEducationFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  formal?: Maybe<DataJsonEducationFormalFilterListInput>;
  languages?: Maybe<DataJsonEducationLanguagesFilterListInput>;
  extra_courses?: Maybe<DataJsonEducationExtra_CoursesFilterInput>;
};

export type DataJsonEducationFormal = {
  title?: Maybe<Scalars['String']>;
  foundation?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
};


export type DataJsonEducationFormalStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DataJsonEducationFormalEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DataJsonEducationFormalFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  foundation?: Maybe<StringQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
};

export type DataJsonEducationFormalFilterListInput = {
  elemMatch?: Maybe<DataJsonEducationFormalFilterInput>;
};

export type DataJsonEducationLanguages = {
  name?: Maybe<Scalars['String']>;
  proficiency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type DataJsonEducationLanguagesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  proficiency?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonEducationLanguagesFilterListInput = {
  elemMatch?: Maybe<DataJsonEducationLanguagesFilterInput>;
};

export type DataJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'path'
  | 'info___name'
  | 'info___phone'
  | 'info___city'
  | 'info___email'
  | 'info___linkedIn'
  | 'info___github'
  | 'career_summary___section_title'
  | 'career_summary___description'
  | 'career_history___section_title'
  | 'career_history___jobs'
  | 'career_history___jobs___role'
  | 'career_history___jobs___company'
  | 'career_history___jobs___start_date'
  | 'career_history___jobs___end_date'
  | 'career_history___jobs___description'
  | 'career_history___jobs___is_actual'
  | 'career_history___jobs___id'
  | 'technical_skills___skills'
  | 'technical_skills___skills___group_name'
  | 'technical_skills___skills___id'
  | 'technical_skills___skills___technologies'
  | 'technical_skills___skills___technologies___name'
  | 'technical_skills___skills___technologies___id'
  | 'technical_skills___section_title'
  | 'interests___section_title'
  | 'interests___values'
  | 'interests___values___name'
  | 'interests___values___id'
  | 'education___section_title'
  | 'education___formal'
  | 'education___formal___title'
  | 'education___formal___foundation'
  | 'education___formal___start_date'
  | 'education___formal___id'
  | 'education___formal___end_date'
  | 'education___languages'
  | 'education___languages___name'
  | 'education___languages___proficiency'
  | 'education___languages___id'
  | 'education___extra_courses___section_title'
  | 'education___extra_courses___platforms'
  | 'education___extra_courses___platforms___name'
  | 'education___extra_courses___platforms___id'
  | 'education___extra_courses___platforms___courses'
  | 'side_projects___section_title'
  | 'side_projects___projects'
  | 'side_projects___projects___name'
  | 'side_projects___projects___start_date'
  | 'side_projects___projects___end_date'
  | 'side_projects___projects___description'
  | 'side_projects___projects___is_ongoing'
  | 'side_projects___projects___show'
  | 'side_projects___projects___id'
  | 'rawJson'
  | 'fileRelativePath';

export type DataJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  info?: Maybe<DataJsonInfoFilterInput>;
  career_summary?: Maybe<DataJsonCareer_SummaryFilterInput>;
  career_history?: Maybe<DataJsonCareer_HistoryFilterInput>;
  technical_skills?: Maybe<DataJsonTechnical_SkillsFilterInput>;
  interests?: Maybe<DataJsonInterestsFilterInput>;
  education?: Maybe<DataJsonEducationFilterInput>;
  side_projects?: Maybe<DataJsonSide_ProjectsFilterInput>;
  rawJson?: Maybe<StringQueryOperatorInput>;
  fileRelativePath?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DataJsonEdge>;
  nodes: Array<DataJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DataJsonInfo = {
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type DataJsonInfoFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonInterests = {
  section_title?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<DataJsonInterestsValues>>>;
};

export type DataJsonInterestsFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<DataJsonInterestsValuesFilterListInput>;
};

export type DataJsonInterestsValues = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type DataJsonInterestsValuesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonInterestsValuesFilterListInput = {
  elemMatch?: Maybe<DataJsonInterestsValuesFilterInput>;
};

export type DataJsonSide_Projects = {
  section_title?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<DataJsonSide_ProjectsProjects>>>;
};

export type DataJsonSide_ProjectsFilterInput = {
  section_title?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<DataJsonSide_ProjectsProjectsFilterListInput>;
};

export type DataJsonSide_ProjectsProjects = {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  end_date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  is_ongoing?: Maybe<Scalars['Boolean']>;
  show?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
};


export type DataJsonSide_ProjectsProjectsStart_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DataJsonSide_ProjectsProjectsEnd_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DataJsonSide_ProjectsProjectsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  start_date?: Maybe<DateQueryOperatorInput>;
  end_date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  is_ongoing?: Maybe<BooleanQueryOperatorInput>;
  show?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonSide_ProjectsProjectsFilterListInput = {
  elemMatch?: Maybe<DataJsonSide_ProjectsProjectsFilterInput>;
};

export type DataJsonSortInput = {
  fields?: Maybe<Array<Maybe<DataJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DataJsonTechnical_Skills = {
  skills?: Maybe<Array<Maybe<DataJsonTechnical_SkillsSkills>>>;
  section_title?: Maybe<Scalars['String']>;
};

export type DataJsonTechnical_SkillsFilterInput = {
  skills?: Maybe<DataJsonTechnical_SkillsSkillsFilterListInput>;
  section_title?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonTechnical_SkillsSkills = {
  group_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  technologies?: Maybe<Array<Maybe<DataJsonTechnical_SkillsSkillsTechnologies>>>;
};

export type DataJsonTechnical_SkillsSkillsFilterInput = {
  group_name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  technologies?: Maybe<DataJsonTechnical_SkillsSkillsTechnologiesFilterListInput>;
};

export type DataJsonTechnical_SkillsSkillsFilterListInput = {
  elemMatch?: Maybe<DataJsonTechnical_SkillsSkillsFilterInput>;
};

export type DataJsonTechnical_SkillsSkillsTechnologies = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type DataJsonTechnical_SkillsSkillsTechnologiesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type DataJsonTechnical_SkillsSkillsTechnologiesFilterListInput = {
  elemMatch?: Maybe<DataJsonTechnical_SkillsSkillsTechnologiesFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  childDataJson?: Maybe<DataJson>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___subtitle'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___image___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___image___absolutePath'
  | 'childMarkdownRemark___frontmatter___image___relativePath'
  | 'childMarkdownRemark___frontmatter___image___extension'
  | 'childMarkdownRemark___frontmatter___image___size'
  | 'childMarkdownRemark___frontmatter___image___prettySize'
  | 'childMarkdownRemark___frontmatter___image___modifiedTime'
  | 'childMarkdownRemark___frontmatter___image___accessTime'
  | 'childMarkdownRemark___frontmatter___image___changeTime'
  | 'childMarkdownRemark___frontmatter___image___birthTime'
  | 'childMarkdownRemark___frontmatter___image___root'
  | 'childMarkdownRemark___frontmatter___image___dir'
  | 'childMarkdownRemark___frontmatter___image___base'
  | 'childMarkdownRemark___frontmatter___image___ext'
  | 'childMarkdownRemark___frontmatter___image___name'
  | 'childMarkdownRemark___frontmatter___image___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___image___dev'
  | 'childMarkdownRemark___frontmatter___image___mode'
  | 'childMarkdownRemark___frontmatter___image___nlink'
  | 'childMarkdownRemark___frontmatter___image___uid'
  | 'childMarkdownRemark___frontmatter___image___gid'
  | 'childMarkdownRemark___frontmatter___image___rdev'
  | 'childMarkdownRemark___frontmatter___image___ino'
  | 'childMarkdownRemark___frontmatter___image___atimeMs'
  | 'childMarkdownRemark___frontmatter___image___mtimeMs'
  | 'childMarkdownRemark___frontmatter___image___ctimeMs'
  | 'childMarkdownRemark___frontmatter___image___atime'
  | 'childMarkdownRemark___frontmatter___image___mtime'
  | 'childMarkdownRemark___frontmatter___image___ctime'
  | 'childMarkdownRemark___frontmatter___image___birthtime'
  | 'childMarkdownRemark___frontmatter___image___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___image___blksize'
  | 'childMarkdownRemark___frontmatter___image___blocks'
  | 'childMarkdownRemark___frontmatter___image___publicURL'
  | 'childMarkdownRemark___frontmatter___image___id'
  | 'childMarkdownRemark___frontmatter___image___children'
  | 'childMarkdownRemark___frontmatter___image_caption'
  | 'childMarkdownRemark___frontmatter___description'
  | 'childMarkdownRemark___frontmatter___categories'
  | 'childMarkdownRemark___frontmatter___series___id'
  | 'childMarkdownRemark___frontmatter___series___index'
  | 'childMarkdownRemark___frontmatter___series___copy'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___fields___lang'
  | 'childMarkdownRemark___fields___commonSlug'
  | 'childMarkdownRemark___rawFrontmatter'
  | 'childMarkdownRemark___fileRelativePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childDataJson___id'
  | 'childDataJson___parent___id'
  | 'childDataJson___parent___parent___id'
  | 'childDataJson___parent___parent___children'
  | 'childDataJson___parent___children'
  | 'childDataJson___parent___children___id'
  | 'childDataJson___parent___children___children'
  | 'childDataJson___parent___internal___content'
  | 'childDataJson___parent___internal___contentDigest'
  | 'childDataJson___parent___internal___description'
  | 'childDataJson___parent___internal___fieldOwners'
  | 'childDataJson___parent___internal___ignoreType'
  | 'childDataJson___parent___internal___mediaType'
  | 'childDataJson___parent___internal___owner'
  | 'childDataJson___parent___internal___type'
  | 'childDataJson___children'
  | 'childDataJson___children___id'
  | 'childDataJson___children___parent___id'
  | 'childDataJson___children___parent___children'
  | 'childDataJson___children___children'
  | 'childDataJson___children___children___id'
  | 'childDataJson___children___children___children'
  | 'childDataJson___children___internal___content'
  | 'childDataJson___children___internal___contentDigest'
  | 'childDataJson___children___internal___description'
  | 'childDataJson___children___internal___fieldOwners'
  | 'childDataJson___children___internal___ignoreType'
  | 'childDataJson___children___internal___mediaType'
  | 'childDataJson___children___internal___owner'
  | 'childDataJson___children___internal___type'
  | 'childDataJson___internal___content'
  | 'childDataJson___internal___contentDigest'
  | 'childDataJson___internal___description'
  | 'childDataJson___internal___fieldOwners'
  | 'childDataJson___internal___ignoreType'
  | 'childDataJson___internal___mediaType'
  | 'childDataJson___internal___owner'
  | 'childDataJson___internal___type'
  | 'childDataJson___path'
  | 'childDataJson___info___name'
  | 'childDataJson___info___phone'
  | 'childDataJson___info___city'
  | 'childDataJson___info___email'
  | 'childDataJson___info___linkedIn'
  | 'childDataJson___info___github'
  | 'childDataJson___career_summary___section_title'
  | 'childDataJson___career_summary___description'
  | 'childDataJson___career_history___section_title'
  | 'childDataJson___career_history___jobs'
  | 'childDataJson___career_history___jobs___role'
  | 'childDataJson___career_history___jobs___company'
  | 'childDataJson___career_history___jobs___start_date'
  | 'childDataJson___career_history___jobs___end_date'
  | 'childDataJson___career_history___jobs___description'
  | 'childDataJson___career_history___jobs___is_actual'
  | 'childDataJson___career_history___jobs___id'
  | 'childDataJson___technical_skills___skills'
  | 'childDataJson___technical_skills___skills___group_name'
  | 'childDataJson___technical_skills___skills___id'
  | 'childDataJson___technical_skills___skills___technologies'
  | 'childDataJson___technical_skills___section_title'
  | 'childDataJson___interests___section_title'
  | 'childDataJson___interests___values'
  | 'childDataJson___interests___values___name'
  | 'childDataJson___interests___values___id'
  | 'childDataJson___education___section_title'
  | 'childDataJson___education___formal'
  | 'childDataJson___education___formal___title'
  | 'childDataJson___education___formal___foundation'
  | 'childDataJson___education___formal___start_date'
  | 'childDataJson___education___formal___id'
  | 'childDataJson___education___formal___end_date'
  | 'childDataJson___education___languages'
  | 'childDataJson___education___languages___name'
  | 'childDataJson___education___languages___proficiency'
  | 'childDataJson___education___languages___id'
  | 'childDataJson___education___extra_courses___section_title'
  | 'childDataJson___education___extra_courses___platforms'
  | 'childDataJson___side_projects___section_title'
  | 'childDataJson___side_projects___projects'
  | 'childDataJson___side_projects___projects___name'
  | 'childDataJson___side_projects___projects___start_date'
  | 'childDataJson___side_projects___projects___end_date'
  | 'childDataJson___side_projects___projects___description'
  | 'childDataJson___side_projects___projects___is_ongoing'
  | 'childDataJson___side_projects___projects___show'
  | 'childDataJson___side_projects___projects___id'
  | 'childDataJson___rawJson'
  | 'childDataJson___fileRelativePath';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  rawFrontmatter?: Maybe<Scalars['String']>;
  fileRelativePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  commonSlug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___subtitle'
  | 'frontmatter___date'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___image___childMarkdownRemark___id'
  | 'frontmatter___image___childMarkdownRemark___excerpt'
  | 'frontmatter___image___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___image___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___image___childMarkdownRemark___rawFrontmatter'
  | 'frontmatter___image___childMarkdownRemark___fileRelativePath'
  | 'frontmatter___image___childMarkdownRemark___html'
  | 'frontmatter___image___childMarkdownRemark___htmlAst'
  | 'frontmatter___image___childMarkdownRemark___excerptAst'
  | 'frontmatter___image___childMarkdownRemark___headings'
  | 'frontmatter___image___childMarkdownRemark___timeToRead'
  | 'frontmatter___image___childMarkdownRemark___tableOfContents'
  | 'frontmatter___image___childMarkdownRemark___children'
  | 'frontmatter___image___childDataJson___id'
  | 'frontmatter___image___childDataJson___children'
  | 'frontmatter___image___childDataJson___path'
  | 'frontmatter___image___childDataJson___rawJson'
  | 'frontmatter___image___childDataJson___fileRelativePath'
  | 'frontmatter___image_caption'
  | 'frontmatter___description'
  | 'frontmatter___categories'
  | 'frontmatter___series___id'
  | 'frontmatter___series___index'
  | 'frontmatter___series___copy'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'fields___lang'
  | 'fields___commonSlug'
  | 'rawFrontmatter'
  | 'fileRelativePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  commonSlug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  rawFrontmatter?: Maybe<StringQueryOperatorInput>;
  fileRelativePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  image_caption?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  series?: Maybe<MarkdownRemarkFrontmatterSeries>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  image_caption?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<MarkdownRemarkFrontmatterSeriesFilterInput>;
};

export type MarkdownRemarkFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  copy?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  dataJson?: Maybe<DataJson>;
  allDataJson: DataJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childDataJson?: Maybe<DataJsonFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  rawFrontmatter?: Maybe<StringQueryOperatorInput>;
  fileRelativePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDataJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  info?: Maybe<DataJsonInfoFilterInput>;
  career_summary?: Maybe<DataJsonCareer_SummaryFilterInput>;
  career_history?: Maybe<DataJsonCareer_HistoryFilterInput>;
  technical_skills?: Maybe<DataJsonTechnical_SkillsFilterInput>;
  interests?: Maybe<DataJsonInterestsFilterInput>;
  education?: Maybe<DataJsonEducationFilterInput>;
  side_projects?: Maybe<DataJsonSide_ProjectsFilterInput>;
  rawJson?: Maybe<StringQueryOperatorInput>;
  fileRelativePath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllDataJsonArgs = {
  filter?: Maybe<DataJsonFilterInput>;
  sort?: Maybe<DataJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___profilePic'
  | 'siteMetadata___social___twitter'
  | 'siteMetadata___social___linkedIn'
  | 'siteMetadata___social___github'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  post?: Maybe<SitePageContextPost>;
  slug?: Maybe<Scalars['String']>;
  series?: Maybe<SitePageContextSeries>;
  postEdges?: Maybe<Array<Maybe<SitePageContextPostEdges>>>;
};

export type SitePageContextFilterInput = {
  post?: Maybe<SitePageContextPostFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<SitePageContextSeriesFilterInput>;
  postEdges?: Maybe<SitePageContextPostEdgesFilterListInput>;
};

export type SitePageContextPost = {
  node?: Maybe<SitePageContextPostNode>;
};

export type SitePageContextPostEdges = {
  node?: Maybe<SitePageContextPostEdgesNode>;
};

export type SitePageContextPostEdgesFilterInput = {
  node?: Maybe<SitePageContextPostEdgesNodeFilterInput>;
};

export type SitePageContextPostEdgesFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostEdgesFilterInput>;
};

export type SitePageContextPostEdgesNode = {
  id?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  frontmatter?: Maybe<SitePageContextPostEdgesNodeFrontmatter>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<SitePageContextPostEdgesNodeFields>;
};

export type SitePageContextPostEdgesNodeFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  commonSlug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostEdgesNodeFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  commonSlug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostEdgesNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextPostEdgesNodeFrontmatterFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageContextPostEdgesNodeFieldsFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatter = {
  series?: Maybe<SitePageContextPostEdgesNodeFrontmatterSeries>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<SitePageContextPostEdgesNodeFrontmatterImage>;
};

export type SitePageContextPostEdgesNodeFrontmatterFilterInput = {
  series?: Maybe<SitePageContextPostEdgesNodeFrontmatterSeriesFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImage = {
  childImageSharp?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharp>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharp = {
  fluid?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluid>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFilterInput = {
  fluid?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterImageFilterInput = {
  childImageSharp?: Maybe<SitePageContextPostEdgesNodeFrontmatterImageChildImageSharpFilterInput>;
};

export type SitePageContextPostEdgesNodeFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextPostEdgesNodeFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostFilterInput = {
  node?: Maybe<SitePageContextPostNodeFilterInput>;
};

export type SitePageContextPostNode = {
  id?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  htmlAst?: Maybe<SitePageContextPostNodeHtmlAst>;
  frontmatter?: Maybe<SitePageContextPostNodeFrontmatter>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<SitePageContextPostNodeFields>;
};

export type SitePageContextPostNodeFields = {
  slug?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  commonSlug?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  commonSlug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  htmlAst?: Maybe<SitePageContextPostNodeHtmlAstFilterInput>;
  frontmatter?: Maybe<SitePageContextPostNodeFrontmatterFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePageContextPostNodeFieldsFilterInput>;
};

export type SitePageContextPostNodeFrontmatter = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  series?: Maybe<SitePageContextPostNodeFrontmatterSeries>;
  image_caption?: Maybe<Scalars['String']>;
  image?: Maybe<SitePageContextPostNodeFrontmatterImage>;
};

export type SitePageContextPostNodeFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  series?: Maybe<SitePageContextPostNodeFrontmatterSeriesFilterInput>;
  image_caption?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SitePageContextPostNodeFrontmatterImageFilterInput>;
};

export type SitePageContextPostNodeFrontmatterImage = {
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharp>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharp = {
  fluid?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFluid>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFilterInput = {
  fluid?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFluidFilterInput>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SitePageContextPostNodeFrontmatterImageChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SitePageContextPostNodeFrontmatterImageFilterInput = {
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<SitePageContextPostNodeFrontmatterImageChildImageSharpFilterInput>;
};

export type SitePageContextPostNodeFrontmatterSeries = {
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  copy?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeFrontmatterSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAst = {
  type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildren>>>;
  data?: Maybe<SitePageContextPostNodeHtmlAstData>;
};

export type SitePageContextPostNodeHtmlAstChildren = {
  type?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildren>>>;
  value?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildren>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildren>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildren>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildren>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenProperties>;
  children?: Maybe<Array<Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildren>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildren = {
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenProperties = {
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenProperties = {
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenProperties = {
  fill?: Maybe<Scalars['String']>;
  d?: Maybe<Scalars['String']>;
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
  style?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Array<Maybe<Scalars['String']>>>;
  sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  loading?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenPropertiesFilterInput = {
  fill?: Maybe<StringQueryOperatorInput>;
  d?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenProperties = {
  href?: Maybe<Scalars['String']>;
  ariaHidden?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  viewBox?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
  style?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Array<Maybe<Scalars['String']>>>;
  sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  loading?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataLanguage?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenChildrenPropertiesFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
  ariaHidden?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  viewBox?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  dataLanguage?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenChildrenFilterListInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenProperties = {
  lang?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  ariaLabel?: Maybe<Scalars['String']>;
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
  style?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  frameBorder?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
  allowFullScreen?: Maybe<Scalars['Boolean']>;
  imgstyle?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  allowPaymentRequest?: Maybe<Scalars['Boolean']>;
};

export type SitePageContextPostNodeHtmlAstChildrenChildrenPropertiesFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  ariaLabel?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  frameBorder?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
  allowFullScreen?: Maybe<BooleanQueryOperatorInput>;
  imgstyle?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
  allowPaymentRequest?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  tagName?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<SitePageContextPostNodeHtmlAstChildrenPropertiesFilterInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenChildrenFilterListInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenFilterListInput = {
  elemMatch?: Maybe<SitePageContextPostNodeHtmlAstChildrenFilterInput>;
};

export type SitePageContextPostNodeHtmlAstChildrenProperties = {
  className?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  dataLanguage?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  async?: Maybe<Scalars['Boolean']>;
  src?: Maybe<Scalars['String']>;
  charSet?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  scrolling?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  frameBorder?: Maybe<Scalars['String']>;
  allowTransparency?: Maybe<Scalars['String']>;
  allowFullScreen?: Maybe<Scalars['String']>;
};

export type SitePageContextPostNodeHtmlAstChildrenPropertiesFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  style?: Maybe<StringQueryOperatorInput>;
  dataLanguage?: Maybe<StringQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  async?: Maybe<BooleanQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  charSet?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  scrolling?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  frameBorder?: Maybe<StringQueryOperatorInput>;
  allowTransparency?: Maybe<StringQueryOperatorInput>;
  allowFullScreen?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstData = {
  quirksMode?: Maybe<Scalars['Boolean']>;
};

export type SitePageContextPostNodeHtmlAstDataFilterInput = {
  quirksMode?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePageContextPostNodeHtmlAstFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SitePageContextPostNodeHtmlAstChildrenFilterListInput>;
  data?: Maybe<SitePageContextPostNodeHtmlAstDataFilterInput>;
};

export type SitePageContextSeries = {
  _0?: Maybe<SitePageContextSeries_0>;
  _1?: Maybe<SitePageContextSeries_1>;
  _2?: Maybe<SitePageContextSeries_2>;
  _3?: Maybe<SitePageContextSeries_3>;
  _4?: Maybe<SitePageContextSeries_4>;
  _5?: Maybe<SitePageContextSeries_5>;
  _6?: Maybe<SitePageContextSeries_6>;
  _7?: Maybe<SitePageContextSeries_7>;
  _8?: Maybe<SitePageContextSeries_8>;
  _9?: Maybe<SitePageContextSeries_9>;
  _10?: Maybe<SitePageContextSeries_10>;
};

export type SitePageContextSeries_0 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_0FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_1 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_10 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_10FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_1FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_2 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_2FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_3 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_3FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_4 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_4FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_5 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_5FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_6 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_6FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_7 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_7FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_8 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_8FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeries_9 = {
  subtitle?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};

export type SitePageContextSeries_9FilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  copy?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextSeriesFilterInput = {
  _0?: Maybe<SitePageContextSeries_0FilterInput>;
  _1?: Maybe<SitePageContextSeries_1FilterInput>;
  _2?: Maybe<SitePageContextSeries_2FilterInput>;
  _3?: Maybe<SitePageContextSeries_3FilterInput>;
  _4?: Maybe<SitePageContextSeries_4FilterInput>;
  _5?: Maybe<SitePageContextSeries_5FilterInput>;
  _6?: Maybe<SitePageContextSeries_6FilterInput>;
  _7?: Maybe<SitePageContextSeries_7FilterInput>;
  _8?: Maybe<SitePageContextSeries_8FilterInput>;
  _9?: Maybe<SitePageContextSeries_9FilterInput>;
  _10?: Maybe<SitePageContextSeries_10FilterInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___post___node___id'
  | 'context___post___node___excerpt'
  | 'context___post___node___timeToRead'
  | 'context___post___node___fileAbsolutePath'
  | 'context___slug'
  | 'context___series____0___subtitle'
  | 'context___series____0___copy'
  | 'context___series____0___index'
  | 'context___series____0___uri'
  | 'context___series____1___subtitle'
  | 'context___series____1___copy'
  | 'context___series____1___index'
  | 'context___series____1___uri'
  | 'context___series____2___subtitle'
  | 'context___series____2___copy'
  | 'context___series____2___index'
  | 'context___series____2___uri'
  | 'context___series____3___subtitle'
  | 'context___series____3___copy'
  | 'context___series____3___index'
  | 'context___series____3___uri'
  | 'context___series____4___subtitle'
  | 'context___series____4___copy'
  | 'context___series____4___index'
  | 'context___series____4___uri'
  | 'context___series____5___subtitle'
  | 'context___series____5___copy'
  | 'context___series____5___index'
  | 'context___series____5___uri'
  | 'context___series____6___subtitle'
  | 'context___series____6___copy'
  | 'context___series____6___index'
  | 'context___series____6___uri'
  | 'context___series____7___subtitle'
  | 'context___series____7___copy'
  | 'context___series____7___index'
  | 'context___series____7___uri'
  | 'context___series____8___subtitle'
  | 'context___series____8___copy'
  | 'context___series____8___index'
  | 'context___series____8___uri'
  | 'context___series____9___subtitle'
  | 'context___series____9___copy'
  | 'context___series____9___index'
  | 'context___series____9___uri'
  | 'context___series____10___subtitle'
  | 'context___series____10___copy'
  | 'context___series____10___index'
  | 'context___series____10___uri'
  | 'context___postEdges'
  | 'context___postEdges___node___id'
  | 'context___postEdges___node___timeToRead'
  | 'context___postEdges___node___fileAbsolutePath'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___ssrAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___sidebar___hidden'
  | 'pluginCreator___pluginOptions___sidebar___position'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___localize'
  | 'pluginCreator___pluginOptions___localize___lang'
  | 'pluginCreator___pluginOptions___localize___name'
  | 'pluginCreator___pluginOptions___localize___short_name'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___pathPrefix'
  | 'pluginCreator___pluginOptions___wrapperStyle'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___className'
  | 'pluginCreator___pluginOptions___aliases___env'
  | 'pluginCreator___pluginOptions___aliases___gitignore'
  | 'pluginCreator___pluginOptions___aliases___gql'
  | 'pluginCreator___pluginOptions___aliases___mdx'
  | 'pluginCreator___pluginOptions___google___families'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___quality'
  | 'pluginOptions___plugins___pluginOptions___pathPrefix'
  | 'pluginOptions___plugins___pluginOptions___wrapperStyle'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___pluginOptions___markdownCaptions'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___tracedSVG'
  | 'pluginOptions___plugins___pluginOptions___loading'
  | 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___plugins___pluginOptions___disableBgImage'
  | 'pluginOptions___plugins___pluginOptions___icon'
  | 'pluginOptions___plugins___pluginOptions___className'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___ssrAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___fileName'
  | 'pluginOptions___sidebar___hidden'
  | 'pluginOptions___sidebar___position'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___localize'
  | 'pluginOptions___localize___lang'
  | 'pluginOptions___localize___name'
  | 'pluginOptions___localize___short_name'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___quality'
  | 'pluginOptions___pathPrefix'
  | 'pluginOptions___wrapperStyle'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___className'
  | 'pluginOptions___aliases___env'
  | 'pluginOptions___aliases___gitignore'
  | 'pluginOptions___aliases___gql'
  | 'pluginOptions___aliases___mdx'
  | 'pluginOptions___google___families'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  sidebar?: Maybe<SitePluginPluginOptionsSidebar>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  localize?: Maybe<Array<Maybe<SitePluginPluginOptionsLocalize>>>;
  maxWidth?: Maybe<Scalars['Int']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  pathPrefix?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  className?: Maybe<Scalars['String']>;
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  google?: Maybe<SitePluginPluginOptionsGoogle>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsAliases = {
  env?: Maybe<Scalars['String']>;
  gitignore?: Maybe<Scalars['String']>;
  gql?: Maybe<Scalars['String']>;
  mdx?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  env?: Maybe<StringQueryOperatorInput>;
  gitignore?: Maybe<StringQueryOperatorInput>;
  gql?: Maybe<StringQueryOperatorInput>;
  mdx?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  sidebar?: Maybe<SitePluginPluginOptionsSidebarFilterInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  localize?: Maybe<SitePluginPluginOptionsLocalizeFilterListInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalize = {
  lang?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsLocalizeFilterInput = {
  lang?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocalizeFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLocalizeFilterInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  quality?: Maybe<Scalars['Int']>;
  pathPrefix?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSidebar = {
  hidden?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSidebarFilterInput = {
  hidden?: Maybe<BooleanQueryOperatorInput>;
  position?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  profilePic?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataSocial = {
  twitter?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'profilePic' | 'author'>
      & { social?: Maybe<Pick<SiteSiteMetadataSocial, 'github' | 'linkedIn' | 'twitter'>> }
    )> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'siteUrl'>
      & { social?: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }> };

export type DataQueryQueryVariables = {};


export type DataQueryQuery = { dataJson?: Maybe<(
    Pick<DataJson, 'fileRelativePath' | 'rawJson'>
    & { info?: Maybe<Pick<DataJsonInfo, 'name' | 'phone' | 'city' | 'email' | 'linkedIn' | 'github'>>, side_projects?: Maybe<(
      Pick<DataJsonSide_Projects, 'section_title'>
      & { projects?: Maybe<Array<Maybe<Pick<DataJsonSide_ProjectsProjects, 'id' | 'name' | 'start_date' | 'end_date' | 'description' | 'is_ongoing' | 'show'>>>> }
    )>, career_summary?: Maybe<Pick<DataJsonCareer_Summary, 'section_title' | 'description'>>, technical_skills?: Maybe<(
      Pick<DataJsonTechnical_Skills, 'section_title'>
      & { skills?: Maybe<Array<Maybe<(
        Pick<DataJsonTechnical_SkillsSkills, 'id' | 'group_name'>
        & { technologies?: Maybe<Array<Maybe<Pick<DataJsonTechnical_SkillsSkillsTechnologies, 'id' | 'name'>>>> }
      )>>> }
    )>, education?: Maybe<(
      Pick<DataJsonEducation, 'section_title'>
      & { formal?: Maybe<Array<Maybe<Pick<DataJsonEducationFormal, 'id' | 'foundation' | 'start_date' | 'end_date' | 'title'>>>>, languages?: Maybe<Array<Maybe<Pick<DataJsonEducationLanguages, 'id' | 'name' | 'proficiency'>>>>, extra_courses?: Maybe<(
        Pick<DataJsonEducationExtra_Courses, 'section_title'>
        & { platforms?: Maybe<Array<Maybe<(
          Pick<DataJsonEducationExtra_CoursesPlatforms, 'id' | 'name'>
          & { courses?: Maybe<Array<Maybe<Pick<DataJsonEducationExtra_CoursesPlatformsCourses, 'id' | 'name' | 'hours'>>>> }
        )>>> }
      )> }
    )>, career_history?: Maybe<(
      Pick<DataJsonCareer_History, 'section_title'>
      & { jobs?: Maybe<Array<Maybe<Pick<DataJsonCareer_HistoryJobs, 'id' | 'role' | 'description' | 'company' | 'end_date' | 'is_actual' | 'start_date'>>>> }
    )>, interests?: Maybe<(
      Pick<DataJsonInterests, 'section_title'>
      & { values?: Maybe<Array<Maybe<Pick<DataJsonInterestsValues, 'id' | 'name'>>>> }
    )> }
  )> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { allMarkdownRemark: { edges: Array<{ node: (
        Pick<MarkdownRemark, 'id' | 'timeToRead' | 'fileAbsolutePath'>
        & { frontmatter?: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'title' | 'subtitle' | 'date' | 'categories' | 'description'>
          & { series?: Maybe<Pick<MarkdownRemarkFrontmatterSeries, 'id'>>, image?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'tracedSVG' | 'srcWebp' | 'srcSetWebp' | 'srcSet' | 'src' | 'sizes' | 'presentationWidth' | 'presentationHeight' | 'originalName' | 'originalImg' | 'aspectRatio'>> }> }> }
        )>, fields?: Maybe<Pick<MarkdownRemarkFields, 'slug' | 'lang' | 'commonSlug'>> }
      ) }> } };