const address = '0xf4ac02cC28c1baa306B2eFb8D9188e6F3ab65fc9'
const abi     = [
  {
    'inputs': [
      {
        'internalType': 'contract IPiToken',
        'name': '_piToken',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_startBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_treasury',
        'type': 'address'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'pid',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Deposit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'pid',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'EmergencyWithdraw',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'referrer',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'commissionAmount',
        'type': 'uint256'
      }
    ],
    'name': 'ReferralCommissionPaid',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'contract IReferral',
        'name': 'newAddress',
        'type': 'address'
      }
    ],
    'name': 'SetReferralAddress',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'pid',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'Withdraw',
    'type': 'event'
  },
  {
    'inputs': [],
    'name': 'COMMISSION_RATE_PRECISION',
    'outputs': [
      {
        'internalType': 'uint16',
        'name': '',
        'type': 'uint16'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'MAXIMUM_REFERRAL_COMMISSION_RATE',
    'outputs': [
      {
        'internalType': 'uint16',
        'name': '',
        'type': 'uint16'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'SHARE_PRECISION',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'contract IERC20',
        'name': '_want',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_strat',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_weighing',
        'type': 'uint256'
      }
    ],
    'name': 'addNewPool',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'balance',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_weighing',
        'type': 'uint256'
      }
    ],
    'name': 'changePoolWeighing',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'communityLeftToMint',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'decimals',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_referrer',
        'type': 'address'
      }
    ],
    'name': 'deposit',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_referrer',
        'type': 'address'
      }
    ],
    'name': 'depositMATIC',
    'outputs': [],
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'emergencyWithdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_from',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_to',
        'type': 'uint256'
      }
    ],
    'name': 'getMultiplier',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'getPricePerFullShare',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'harvest',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'harvestAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'massUpdatePools',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'pendingPiToken',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'piToken',
    'outputs': [
      {
        'internalType': 'contract IPiToken',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'piTokenPerBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'poolInfo',
    'outputs': [
      {
        'internalType': 'contract IERC20',
        'name': 'want',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'weighing',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'lastRewardBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'accPiTokenPerShare',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'strategy',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'poolLength',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'referralCommissionRate',
    'outputs': [
      {
        'internalType': 'uint16',
        'name': '',
        'type': 'uint16'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'referralMgr',
    'outputs': [
      {
        'internalType': 'contract IReferral',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'contract IReferral',
        'name': '_newReferral',
        'type': 'address'
      }
    ],
    'name': 'setReferralAddress',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint16',
        'name': '_referralCommissionRate',
        'type': 'uint16'
      }
    ],
    'name': 'setReferralCommissionRate',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'startBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'tokensReceived',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalWeighing',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'treasuryAddress',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'treasuryLeftToMint',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'treasuryTokensPerCommunity',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'updatePool',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'shares',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'paidReward',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_shares',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_pid',
        'type': 'uint256'
      }
    ],
    'name': 'withdrawAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'wmatic',
    'outputs': [
      {
        'internalType': 'contract IWMATIC',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
]

const aToken = {
  address: '0xc9276ECa6798A14f64eC33a526b547DAd50bDa2F',
}

const debtToken = {
  address: '0xc156967272b7177DcE40E3b3E7c4269f750F3160'
}

const archimedes = { abi, address, aToken, debtToken }

export default archimedes
