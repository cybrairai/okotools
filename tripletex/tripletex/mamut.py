#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# map from Mamut-setup to Tripletex-setup
account_map = {
    '1911': ('1900', '0'),
    '1915': ('1915', '0'),
    '2414': ('2901', '0'),
    '3011': ('3000', '1403'),
    '3012': ('3000', '1404'),
    '3013': ('3000', '1405'),
    '3014': ('3000', '1406'),
    '3015': ('3000', '1407'),
    '3016': ('3000', '40013'),
    '3017': ('3000', '1408'),
    '3018': ('3000', '1415'),
    '3021': ('3001', '1415'),
    '3023': ('3000', '1402'),
    '3025': ('3001', '1409'),
    '3030': ('3220', '40041'),
    '3116': ('3090', '40101'),
    '3117': ('3290', '40054'),
    '3118': ('3090', '40008'),
    '3120': ('3290', '40002'),
    '3122': ('3290', '40022'),
    '3910': ('3910', '40001'),
    '4245': ('7760', '40015'),
    '4645': ('4642', '40024'),
    '6843': ('7320', '40041'),
    '6844': ('7320', '40041'),
    '7741': ('7702', '40029'),
    '7746': ('7701', '40026'),
    '8995': ('1909', '0'),
}


class Transform:
    @staticmethod
    def apply(transaction):
        if transaction.account in account_map:
            d = account_map[transaction.account]
            transaction.account = d[0]
            transaction.project = d[1]
