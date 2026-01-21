import { Horizon } from "@stellar/stellar-sdk";

// Stellar account to fetch operations for
const STELLAR_ACCOUNT = "GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK";
const trxHas = "fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576"
// Initialize Stellar server (using public mainnet)
const server = new Horizon.Server("https://horizon.stellar.org");


const transectionDetails = await server.transactions().transaction(trxHas).call()
console.log(transectionDetails)

/*
Response Sample:
{
  _links: {
    self: {
      href: 'https://horizon.stellar.org/transactions/fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576'
    },
    account: {
      href: 'https://horizon.stellar.org/accounts/GAF4UUDHK35XNGKO6MJUAM3GXSTXMGPIYIRG2BJGMKCPN7MKABOMCD34'
    },
    ledger: { href: 'https://horizon.stellar.org/ledgers/54623631' },
    operations: {
      href: 'https://horizon.stellar.org/transactions/fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576/operations{?cursor,limit,order}',
      templated: true
    },
    effects: {
      href: 'https://horizon.stellar.org/transactions/fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576/effects{?cursor,limit,order}',
      templated: true
    },
    precedes: {
      href: 'https://horizon.stellar.org/transactions?order=asc&cursor=234606708733788160'
    },
    succeeds: {
      href: 'https://horizon.stellar.org/transactions?order=desc&cursor=234606708733788160'
    },
    transaction: {
      href: 'https://horizon.stellar.org/transactions/fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576'
    }
  },
  id: 'fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576',
  paging_token: '234606708733788160',
  successful: true,
  hash: 'fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576',
  ledger: [Function (anonymous)],
  created_at: '2024-11-30T06:43:21Z',
  source_account: 'GAF4UUDHK35XNGKO6MJUAM3GXSTXMGPIYIRG2BJGMKCPN7MKABOMCD34',
  source_account_sequence: '208147468217483495',
  fee_account: 'GAF4UUDHK35XNGKO6MJUAM3GXSTXMGPIYIRG2BJGMKCPN7MKABOMCD34',
  fee_charged: '100',
  max_fee: '100',
  operation_count: 1,
  envelope_xdr: 'AAAAAgAAAAALylBnVvt2mU7zE0AzZryndhnowiJtBSZihPb9igBcwQAAAGQC430FAAAA5wAAAAEAAAAAAAAAAAAAAABnSrQ1AAAAAAAAAAEAAAABAAAAAAvKUGdW+3aZTvMTQDNmvKd2GejCIm0FJmKE9v2KAFzBAAAAAQAAAACZNIrDETwKhSwosIQ+S0SE6Zt29pjMKg6wRaZySfdGRgAAAAJCQU5EQ09JTgAAAAAAAAAAmEfa6ocSIJONjEs3gc/Wm7beh5nTCVoyVEfwPB4X58IAAAAN+EdYAAAAAAAAAAABigBcwQAAAEDeCjKz9i2vS6VLnDzrnJUr6W0ynC93yXZZnNrnTHISzjP1Ow4Wz7eupf4eIs0UmHT4bCWF7mor0+JntZS/KWIN',
  result_xdr: 'AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAA=',
  fee_meta_xdr: 'AAAAAgAAAAMDQSJsAAAAAAAAAAALylBnVvt2mU7zE0AzZryndhnowiJtBSZihPb9igBcwQAAAABVZ79dAuN9BQAAAOYAAAANAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAADAAAAAANBImwAAAAAZ0iERwAAAAAAAAABA0F9jwAAAAAAAAAAC8pQZ1b7dplO8xNAM2a8p3YZ6MIibQUmYoT2/YoAXMEAAAAAVWe++QLjfQUAAADmAAAADQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAIAAAAAAAAAAwAAAAADQSJsAAAAAGdIhEcAAAAA',
  memo_type: 'none',
  signatures: [
    '3goys/Ytr0ulS5w865yVK+ltMpwvd8l2WZza50xyEs4z9TsOFs+3rqX+HiLNFJh0+Gwlhe5qK9PiZ7WUvyliDQ=='
  ],
  preconditions: { timebounds: { min_time: '0', max_time: '1732949045' } },
  self: [Function (anonymous)],
  account: [Function (anonymous)],
  ledger_attr: 54623631,
  operations: [Function (anonymous)],
  effects: [Function (anonymous)],
  precedes: [Function (anonymous)],
  succeeds: [Function (anonymous)],
  transaction: [Function (anonymous)]
}
*/