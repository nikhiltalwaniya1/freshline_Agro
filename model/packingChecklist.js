const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const packingChecklistSchema = new Schema(
  {
    packingMaterialIssue: {
      type: Object,
      default: {
        materialId: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isFollowFIFO: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isSufficentQuantity: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        qualityOfMaterial: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isDamagePeaceIssue: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isFullFillRequirement: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        }
      }
    },
    midStagePacking: {
      type: Object,
      default: {
        isProtectiveWithCloths: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isPackingMaterialHandling: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isSufficentQuantity: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isWeighingBalance: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isBatchNoinOrder: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isFGReportMaintaing: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        }
      }
    },
    endStagePacking: {
      type: Object,
      default: {
        isPackedAsPerProcedure: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        batchNoVerified: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        qualityOfPacking: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        },
        isHyginClearance: {
          type: Object,
          default: {
            isOk: {
              type: Boolean,
            },
            comment: {
              type: String,
            }
          }
        }
      }
    },
    verifiedBy: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: '',
      ref: "user",
    },
    status: {
      type: Boolean,
      default: false
    },
    formateNumber: {
      type: String,
      default: ''
    },
    createdBy: {
      type: String,
      default: '',
      ref: "user",
    },
    issueNumber: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

packingChecklistSchema.plugin(mongoosePaginate);
var packingChecklistModel = mongoose.model('FQC10_Packing_checklist', packingChecklistSchema);
module.exports = packingChecklistModel