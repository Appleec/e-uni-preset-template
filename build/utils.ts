import { execSync } from '@elinzy/core';

/**
 * Get current branch
 */
export const getCurrentBranch = () => execSync('git', [
    'rev-parse',
    '--abbrev-ref',
    'HEAD',
], { abbrev: true });

/**
 * Get last commit id(hash) from current branch
 */
export const getCurrentCommitId = () => execSync('git', [
    'rev-parse',
    '--short',
    'HEAD',
], { abbrev: true });

/**
 * Parse environment variable
 * @param value
 */
export function parseEnv(value: any) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (!isNaN(value)) return Number(value);
    return value;
}