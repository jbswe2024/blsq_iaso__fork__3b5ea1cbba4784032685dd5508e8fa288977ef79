import React, { FunctionComponent } from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
} from '@material-ui/core';
import { useSafeIntl } from 'bluesquare-components';
import { FileContent, FormDescriptor } from '../../types/instance';
import { IntlFormatMessage } from '../../../../types/intl';
import MESSAGES from '../messages';

type Props = {
    fileContent: FileContent;
    fileDescriptor: FormDescriptor;
};

const styles = theme => ({
    tableCellHead: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        borderTop: 'none !important',
        borderLeft: 'none !important',
        borderRight: 'none !important',
        borderBottom: `1px solid ${theme.palette.ligthGray.border}  !important`,
    },
    tableCell: {
        backgroundColor: 'transparent',
        borderTop: 'none !important',
        borderLeft: 'none !important',
        borderRight: 'none !important',
        borderBottom: `1px solid ${theme.palette.ligthGray.border}  !important`,
    },
});

const useStyles = makeStyles(styles);

const getLabelFromKey = (descriptor, key) => {
    const field = descriptor.find(child => child.name === key);

    // TO DO : find an efficient way to get label from group type fields (questions, meta, ...)
    if (!field) {
        return key;
    }

    let label = field.label.split(':')[0];

    // useful for labels like "subscriberid ${subscriberid}"
    if (label.includes('$')) {
        label = label.split('$')[0];
    }

    return label;
};

export const InstanceLogContentBasic: FunctionComponent<Props> = ({
    fileContent,
    fileDescriptor,
}) => {
    const { formatMessage }: { formatMessage: IntlFormatMessage } =
        useSafeIntl();
    const classes: Record<string, string> = useStyles();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell
                        width={150}
                        align="left"
                        className={classes.tableCellHead}
                    >
                        {formatMessage(MESSAGES.label)}
                    </TableCell>
                    <TableCell
                        width={150}
                        align="left"
                        className={classes.tableCellHead}
                    >
                        {formatMessage(MESSAGES.instanceLogsVersionA)}
                    </TableCell>
                    <TableCell
                        width={150}
                        align="left"
                        className={classes.tableCellHead}
                    >
                        {formatMessage(MESSAGES.instanceLogsVersionB)}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fileContent.logA &&
                    fileContent.logB &&
                    Object.keys(fileContent.logA.json).map(labelKey => {
                        if (labelKey !== 'meta' && labelKey !== 'uuid') {
                            return (
                                <TableRow key={labelKey}>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                    >
                                        {fileDescriptor?.children &&
                                            getLabelFromKey(
                                                fileDescriptor.children,
                                                labelKey,
                                            )}
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                    >
                                        {/* TO DO : find a way to search text values for "0" and "1" in questions */}
                                        {fileContent?.logA.json[labelKey]}
                                    </TableCell>
                                    <TableCell
                                        className={classes.tableCell}
                                        align="left"
                                    >
                                        {fileContent?.logB.json[labelKey]}
                                    </TableCell>
                                </TableRow>
                            );
                        }
                        return null;
                    })}
            </TableBody>
        </Table>
    );
};
