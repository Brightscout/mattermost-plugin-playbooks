// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {ActionFunc} from 'mattermost-redux/types/actions';

import {FormattedMessage} from 'react-intl';

import {
    AutomationHeader,
    AutomationTitle,
    SelectorWrapper,
} from 'src/components/backstage/playbook_edit/automation/styles';
import {Toggle} from 'src/components/backstage/playbook_edit/automation/toggle';
import InviteUsersSelector from 'src/components/backstage/playbook_edit/automation/invite_users_selector';

interface Props {
    enabled: boolean;
    onToggle: () => void;
    searchProfiles: (term: string) => ActionFunc;
    getProfiles: () => ActionFunc;
    userIds: string[];
    onAddUser: (userId: string) => void;
    onRemoveUser: (userId: string) => void;
}

export const InviteUsers = (props: Props) => {
    return (
        <AutomationHeader>
            <AutomationTitle>
                <Toggle
                    isChecked={props.enabled}
                    onChange={props.onToggle}
                />
                <div><FormattedMessage defaultMessage='Invite members'/></div>
            </AutomationTitle>
            <SelectorWrapper>
                <InviteUsersSelector
                    isDisabled={!props.enabled}
                    onAddUser={props.onAddUser}
                    onRemoveUser={props.onRemoveUser}
                    userIds={props.userIds}
                    searchProfiles={props.searchProfiles}
                    getProfiles={props.getProfiles}
                />
            </SelectorWrapper>
        </AutomationHeader>
    );
};
