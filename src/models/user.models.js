import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    FileNo: {
      type: String,
      required: true,
      trim: true,
    },
    EMINumber: {
      type: String, // Changed to String for more flexibility
      required: true,
      trim: true,
    },
    FileStatus: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    FileIssue: {
      type: String,
    },
    LastDateAllowance: {
      type: String, // Corrected spelling from LastDateAllowence
    },
    applicationNumber: {
      type: String,
      required: true,
    },
    transactionNumber: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: String,
      required: true,
    },
    nationality: {
      type: String, // Changed to String for more flexibility
      required: true,
    },
    dob: {
      type: String, // Date type can be used if specific format is required
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
