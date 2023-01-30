/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Any: any;
    DateTime: any;
    JSON: any;
    Upload: any;
};

export type AuthResponse = {
    __typename?: 'AuthResponse';
    accessToken?: Maybe<Scalars['String']>;
    firstname?: Maybe<Scalars['String']>;
    isAdmin?: Maybe<Scalars['Boolean']>;
    isEmailConfirmed?: Maybe<Scalars['Boolean']>;
    lastname?: Maybe<Scalars['String']>;
    refreshToken?: Maybe<Scalars['String']>;
    userId: Scalars['Int'];
    username?: Maybe<Scalars['String']>;
    xmppUsername?: Maybe<Scalars['String']>;
};


export type DwollaCustomer = {
    __typename?: 'DwollaCustomer';
    DwollaFundingSource?: Maybe<Array<Maybe<DwollaFundingSource>>>;
    id: Scalars['Int'];
    status: DwollaCustomerStatus;
    url: Scalars['String'];
    user?: Maybe<User>;
    userId: Scalars['Int'];
};


export type User = {
    __typename?: 'User';
    HSGraduationYear?: Maybe<Scalars['Int']>;
    SATScore?: Maybe<Scalars['Float']>;
    backgroundImage?: Maybe<Scalars['String']>;
    backgroundImageThumbnail?: Maybe<Scalars['String']>;
    backgroundVideoData?: Maybe<Scalars['JSON']>;
    bio?: Maybe<Scalars['String']>;
    birthDate?: Maybe<Scalars['DateTime']>;
    city?: Maybe<Scalars['String']>;
};


export enum DwollaCustomerStatus {
    Deactivated = 'deactivated',
    Document = 'document',
    Retry = 'retry',
    ReverifyingDetails = 'reverifyingDetails',
    ReviewingDocument = 'reviewingDocument',
    Suspended = 'suspended',
    Unverified = 'unverified',
    Verified = 'verified',
}


export type DwollaFundingSource = {
    __typename?: 'DwollaFundingSource';
    accessToken?: Maybe<Scalars['String']>;
    dwollaCustomer?: Maybe<DwollaCustomer>;
    dwollaCustomerId: Scalars['Int'];
    id: Scalars['Int'];
    status: Scalars['String'];
    url: Scalars['String'];
};


export type Mutation = {
    __typename?: 'Mutation';
    addCommentLike: Scalars['Boolean'];
    refreshToken: AuthResponse;
};
