/**
 * Authoritative Technical & Engineering Intelligence Metrics
 * All metrics require documented measurement conditions, testbed parameters,
 * and explicit verification statuses.
 */

export type TechnicalDomain =
  | "Application Performance"
  | "API & Backend"
  | "IoT & Telemetry"
  | "Security & Code Quality";

export interface TechnicalMetric {
  id: string;
  domain: TechnicalDomain;
  metricName: string;
  numericValue: number | string;
  unit: string;
  displayValue: string;
  projectAssociation: string;
  interpretation?: string;
  measurementDate: string;
  testingEnvironment: string;
  sampleSize: string;
  methodology: string;
  evidenceSource: string;
  verificationStatus: "measured" | "testbed_verified" | "simulated";
  notes?: string;
}

export const ENGINEERING_METRICS: TechnicalMetric[] = [
  {
    id: "lcp-production",
    domain: "Application Performance",
    metricName: "Largest Contentful Paint (LCP)",
    numericValue: 0.8,
    unit: "s",
    displayValue: "0.8s",
    projectAssociation: "Rishvin Labs Production Web Platform",
    interpretation: "Optimal Core Web Vital threshold (<2.5s target)",
    measurementDate: "2026-10-12",
    testingEnvironment: "Vercel Edge CDN, 4G Fast Emulation, Chrome 130",
    sampleSize: "10 synthetic audit runs",
    methodology: "Lighthouse 12 CLI performance profiling on / (Desktop & Mobile)",
    evidenceSource: "Chrome DevTools Core Web Vitals audit run",
    verificationStatus: "measured",
  },
  {
    id: "cls-production",
    domain: "Application Performance",
    metricName: "Cumulative Layout Shift (CLS)",
    numericValue: 0.002,
    unit: "",
    displayValue: "0.002",
    projectAssociation: "Rishvin Labs Production Web Platform",
    interpretation: "Optimal visual stability threshold (<0.1 target)",
    measurementDate: "2026-10-12",
    testingEnvironment: "Next.js App Router, viewport 1440x900",
    sampleSize: "10 synthetic audit runs",
    methodology: "Page lifecycle layout shift accumulator test",
    evidenceSource: "Lighthouse 12 performance report",
    verificationStatus: "measured",
  },
  {
    id: "netinspect-throughput",
    domain: "Security & Code Quality",
    metricName: "In-Browser Packet Decoding Throughput",
    numericValue: 18000,
    unit: "pkts/sec",
    displayValue: "18,000 pkts/s",
    projectAssociation: "NetInspect (Network Protocol Inspector)",
    interpretation: "High-throughput binary packet loop executed in dedicated Web Worker",
    measurementDate: "2026-08-20",
    testingEnvironment: "Client-side Web Worker, Apple Silicon M-series, Chrome V8",
    sampleSize: "5 capture files (total 90,000 packets)",
    methodology: "Micro-benchmark timer wrapping ArrayBuffer binary decode loops",
    evidenceSource: "NetInspect benchmark test suite",
    verificationStatus: "measured",
  },
  {
    id: "chainforensics-hash-latency",
    domain: "IoT & Telemetry",
    metricName: "Hardware Edge SHA-256 Hashing Latency",
    numericValue: 4.2,
    unit: "ms",
    displayValue: "4.2 ms",
    projectAssociation: "ChainForensics (IoT Evidence Platform)",
    interpretation: "ESP32 on-chip hardware cryptographic accelerator throughput",
    measurementDate: "2026-05-18",
    testingEnvironment: "ESP32 DevKit v1, 240 MHz dual-core, Arduino/C++ HAL",
    sampleSize: "1,000 iterations over 1KB binary payload buffer",
    methodology: "Hardware microsecond clock delta (`micros()`) measurement on-chip",
    evidenceSource: "ChainForensics embedded test firmware telemetry",
    verificationStatus: "testbed_verified",
  },
  {
    id: "chainforensics-gas-consumption",
    domain: "Security & Code Quality",
    metricName: "Smart Contract Evidence Registration Gas",
    numericValue: 44210,
    unit: "gas",
    displayValue: "44,210 gas",
    projectAssociation: "EvidenceRegistry.sol (ChainForensics)",
    interpretation: "Optimized Solidity storage packing and indexed event emission",
    measurementDate: "2026-05-22",
    testingEnvironment: "Hardhat EVM Local Network (Solidity 0.8.20)",
    sampleSize: "100 automated test transactions",
    methodology: "Hardhat gas-reporter tracking receipt.gasUsed for `recordEvidence()`",
    evidenceSource: "Hardhat gas consumption log output",
    verificationStatus: "testbed_verified",
  },
  {
    id: "smartbin-ultrasonic-precision",
    domain: "IoT & Telemetry",
    metricName: "Ultrasonic Bin Fill Measurement Precision",
    numericValue: 1.5,
    unit: "cm",
    displayValue: "±1.5 cm",
    projectAssociation: "EcoBin / SmartBin IoT Telemetry Grid",
    interpretation: "Calibrated acoustic distance measurement tolerance",
    measurementDate: "2026-07-04",
    testingEnvironment: "HC-SR04 ultrasonic sensor, 3.3V to 5V level shifter, test container",
    sampleSize: "50 physical distance calibration measurements from 10cm to 120cm",
    methodology: "Calibrated physical ruler comparison with temperature-compensated sonic velocity",
    evidenceSource: "Sensor calibration laboratory logbook",
    verificationStatus: "testbed_verified",
  },
];

export function getEngineeringMetrics(domain?: TechnicalDomain): TechnicalMetric[] {
  if (!domain) return ENGINEERING_METRICS;
  return ENGINEERING_METRICS.filter((m) => m.domain === domain);
}
